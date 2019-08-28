<?php
/**
 * Implementation of class for Robo - http://robo.li/
 *
 */

include_once 'RoboFileDrupalDeployInterface.php';

/**
 * Class RoboFile
 */
class RoboFile extends \Robo\Tasks implements RoboFileDrupalDeployInterface {

  private $yarn_bin = "/usr/bin/yarn";
  private $gulp_bin = "node_modules/.bin/gulp";

  /**
   * This is called by Jenkins to deploy the style guide.
   */
  public function build() {
    $this->taskExec("$this->yarn_bin build:prd")->run();
    $this->taskExec("touch app/probe.htm")->run();
  }

  /**
   * Perform a dev build on the project.
   *
   * This build will also install frontend dependencies.
   */
  public function buildDev() {
    $this->taskExec("$this->yarn_bin install --ignore-engines")->run();
    $this->devFrontendPackages();
    $this->taskExec("$this->yarn_bin build")->run();
    $this->taskExec("touch app/probe.htm")->run();
  }

  /**
   * Perform package installation.
   */
  public function distributionBuild() {
    $this->taskExec("$this->yarn_bin install --ignore-engines --no-progress")->run();
    $this->taskExec("$this->yarn_bin build:prd")->run();
    $this->taskExec("touch app/probe.htm")->run();
  }

  /**
   * Ask a couple of questions and then setup the initial config.
   */
  public function devInit() {
    $this->say("Initial project setup. Adds user details to gitconfig.");
    $git_name  = $this->ask("Enter your Git name (e.g. Bob Rocks):");
    $git_email = $this->ask("Enter your Git email (e.g. bob@rocks.adelaide.edu.au):");
    $this->taskExec("git config --global user.name \"$git_name\"")->run();
    $this->taskExec("git config --global user.email \"$git_email\"")->run();
  }

  /**
   * Perform frontend package installation.
   */
  public function devFrontendPackages() {
  }

  /**
   * Releases the artefacts produced by the styleguide.
   *
   * @param string $tag
   */
  public function artefactsRelease($tag = '') {
    if (empty($tag)) {
      $this->say("Please specifiy a tag for the theme release. E.g. 1.1.0");
      return;
    }

    $styleguide_path = '/tmp/ua-styleguide-v2/';
    $styleguide_theme_path = '/tmp/ua-styleguide-v2-theme/';

    // Check we're in a clean state - delete possible existing checkouts.
    $this->taskDeleteDir($styleguide_path)->run();
    $this->taskDeleteDir($styleguide_theme_path)->run();

    // Checkout the styleguide repo - avoids issues working with old releases.
    $this->taskGitStack()
      ->dir('/tmp')
      ->cloneRepo('git@gitlab.adelaide.edu.au:web-team/ua-styleguide-v2.git', $styleguide_path)
      ->run();
    // Ensure we're on master branch in the styleguide repo.
    $this->_exec("git -C $styleguide_path checkout $tag");

    // Checkout the styleguide theme repo.
    $this->taskGitStack()
      ->dir('/tmp')
      ->cloneRepo('git@gitlab.adelaide.edu.au:web-team/ua-styleguide-v2-theme.git', $styleguide_theme_path)
      ->run();
    // Ensure we're on master branch in the styleguide theme repo.
    $this->_exec("git -C $styleguide_theme_path checkout master");

    // Delete all the assets.
    foreach(glob($styleguide_theme_path . '*') as $dir) {
      $this->taskDeleteDir($dir)->run();
    }

    // Checkout the README.md - we want to keep it as is.
    $this->_exec("git -C $styleguide_theme_path checkout README.md");

    // Copy across the newly released ua_theme assets.
    $this->taskCopyDir([$styleguide_path . 'src/assets/' => $styleguide_theme_path])->run();
    $this->taskFilesystemStack()
      ->copy($styleguide_path . 'CHANGELOG.md', $styleguide_theme_path . 'CHANGELOG.md', TRUE)
      ->run();

    // Commit, tag and push the new assets.
    $this->taskGitStack()
      ->stopOnFail()
      ->dir($styleguide_theme_path)
      ->add('-A')
      ->commit('Styleguide v2 release ' . $tag)
      ->tag($tag)
      ->push('origin', 'master')
      ->push('origin', $tag)
      ->run();

    // Clean up - delete the checkouts.
    $this->taskDeleteDir($styleguide_path)->run();
    $this->taskDeleteDir($styleguide_theme_path)->run();
  }

  /**
   * Update node dependencies and export them to yarn.lock.
   *
   * Usually run after making changes to package.json OR just needing to update
   * installed packages.
   */
  public function devYarnUpgrade() {
    // Remove all existing installed node packages.
    $this->_exec("rm -rf node_modules");

    // Get the latest node packages and update yarn.lock.
    $this->_exec("$this->yarn_bin upgrade");
  }

  /**
   * Runs the Mocha JavaScript tests using phantomjs.
   */
  public function runMochaTests() {
    // Get a list of the tests
    $tests = glob('app/tests/js/mocha/*.html');
    foreach ($tests as $test) {
      $this->_exec('node_modules/.bin/mocha-phantomjs --ignore-resource-errors -p node_modules/.bin/phantomjs ' . $test);
    }
  }

  /**
   * Perform a styleguide build.
   */
  public function environmentBuild() {
    // Required for uasm deploy.
  }

  /**
   * Perform a styleguide rebuild.
   */
  public function environmentRebuild() {
    // Required for uasm deploy.
  }

  /**
   * Apply site configuration.
   */
  public function buildApplyConfig() {
    // Required for uasm deploy.
  }

  /**
   * Apply updates.
   */
  public function buildApplyUpdates() {
    // Required for uasm deploy.
  }

  /**
   * Set files permissions.
   */
  public function devSetFilesOwner() {
    // Required for uasm deploy.
  }

  /**
   * Hosting platform requires this dummy method.
   */
  public function devCreateConfigSyncDir() {
    // Required for uasm deploy.
  }

}
