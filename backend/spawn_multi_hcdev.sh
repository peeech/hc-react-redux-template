#!/bin/bash
# Holochain 3 identity scenario

echo "Spawning 3 instances of hcdev"
echo "To kill them type ./kill_all_hcdev.sh"
hcdev --execpath holo-identities/.identity3 web 4143 &
hcdev --execpath holo-identities/.identity2 web 4142 &
hcdev --execpath holo-identities/.identity1 web 4141 &

