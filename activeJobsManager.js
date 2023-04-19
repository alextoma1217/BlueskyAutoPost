const activeJobs = {};

function addJob(username, job) {
  activeJobs[username] = job;
}

function getJob(username) {
  return activeJobs[username];
}

function removeJob(username) {
  if (activeJobs[username]) {
    delete activeJobs[username];
  }
}

module.exports = {
  addJob,
  getJob,
  removeJob,
};
