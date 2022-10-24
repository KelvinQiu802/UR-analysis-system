// 按顺序写task里面所有的functions
export const task = ['Login'];

// 每一个属性对应一个function，里面的数组存放所有可能的NOS
export const NOS = {
  Login: [
    [
      {
        module: 'Login',
        widget: 'L-Username',
        startTimeTick: 200,
        duration: 10,
      },
      {
        module: 'None',
        widget: 'Keypress',
        startTimeTick: 300,
        duration: 10,
      },
      {
        module: 'Login',
        widget: 'L-Password',
        startTimeTick: 400,
        duration: 10,
      },
      {
        module: 'None',
        widget: 'Keypress',
        startTimeTick: 500,
        duration: 10,
      },
      {
        module: 'Login',
        widget: 'L-Submit',
        startTimeTick: 600,
        duration: 10,
      },
    ],
    [
      {
        module: 'Login',
        widget: 'L-Password',
        startTimeTick: 200,
        duration: 10,
      },
      {
        module: 'None',
        widget: 'Keypress',
        startTimeTick: 300,
        duration: 10,
      },
      {
        module: 'Login',
        widget: 'L-Username',
        startTimeTick: 400,
        duration: 10,
      },
      {
        module: 'None',
        widget: 'Keypress',
        startTimeTick: 500,
        duration: 10,
      },
      {
        module: 'Login',
        widget: 'L-Submit',
        startTimeTick: 600,
        duration: 10,
      },
    ],
  ],
};
