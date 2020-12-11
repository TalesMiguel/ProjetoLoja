#!/bin/bash
export COMPOSE_PROJECT_NAME=jabuticaba_${CI_COMMIT_SHA}
docker-compose -f docker/compose/test.yml run jabuticaba unittests.sh
exitcode=$?
docker-compose -f docker/compose/test.yml down
exit $exitcode
