import Task from './task/component';
import taskIcon from './task/icon';
import Event from './event/component';
import eventIcon from './event/icon';
import Demo from './demo/component';
import DemoIcon from './demo/icon';


const config = {
  entityTypes: {
    Task: {
      width: 125,
      height: 75,
    },
    Event: {
      width: 50,
      height: 50,
    },
    Demo: {
      width: 50,
      height: 50,
    },
  },
  gridSize: 25,
};

const customEntities = {
  Task: {
    component: Task,
    icon: taskIcon,
  },
  Event: {
    component: Event,
    icon: eventIcon,
  },
  Demo: {
    component: Demo,
    icon: DemoIcon,
  },
};

export { config, customEntities };
