import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";

import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();
store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(bugAdded({ description: "Bugsss 1" }));
store.dispatch(bugAdded({ description: "Bugsss 2" }));
store.dispatch(bugAdded({ description: "Bugsss 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugResolved({ id: 1 }));

const bugs = getBugsByUser(2)(store.getState());
console.log(bugs);
