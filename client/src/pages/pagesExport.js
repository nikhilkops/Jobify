export { default as AddJob } from "./AddJob";
export { default as Admin } from "./Admin";
export { default as AllJobs } from "./AllJobs";
export { default as DashBoardLayout } from "./DashBoardLayout";
export { default as DeleteJob } from "./DeleteJob";
export { default as EditJob } from "./EditJob";
export { default as Error } from "./Error";
export { default as HomeLayout } from "./HomeLayout";
export { default as Landing } from "./Landing";
export { default as Login } from "./Login";
export { default as Profile } from "./Profile";
export { default as Register } from "./Register";
export { default as Stats } from "./Stats";

const metaInfo = {
  commonFeatures: {
    coreFeatures: {
      features: [
        {
          name: "CommonAnimation",
          dependencies: [
            { type: "utility", name: "Animation" },
            { type: "utility", name: "State" },
          ],
        },
        {
          name: "CommonAnimation",
          dependencies: [
            { type: "utility", name: "Animation" },
            { type: "utility", name: "State" },
          ],
        },
      ],
    },

    utility: {
      features: [
        {
          name: "Animation",
          dependencies: [],
          path: "@aristocrattechnologiesinc/nmg-game-utility/lib/Animation",
        },
        {
          name: "State",
          dependencies: [],
          path: "@aristocrattechnologiesinc/nmg-game-utility/lib/State",
        },
      ],
      packageName: "@aristocrattechnologiesinc/nmg-game-utility",
      tag: "1.0.11-beta-delay",
    },
    someUtility: {},
  },
};

const newObj = {};

metaInfo.commonFeatures.coreFeatures.features.map((val) => {
  const dependencies = val.dependencies;
  dependencies.map((value) => {
    const type = value.type;
    const name = value.name;

    if (!newObj.hasOwnProperty(type)) {
      // adding type to our newObj
      newObj[type] = [];
    }

    const typeObject = metaInfo.commonFeatures[type];
    typeObject.features.map((value1) => {
      if (value1.name === name) {
        //push it to new array [newObj] value1
        newObj[type].push(value1);
        console.log(value1.name + " ,");
        //break
      }
    });
  });
});
