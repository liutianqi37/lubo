<<<<<<< HEAD
export default {

  //model的名字，用来在页面中找到要调用哪一个model，就像id一样。
  namespace: 'example',
  //用来存放数据的地方。
  state: {},

  //绑定监听页面的，只有进入监听的页面才会触发，且在当前页面只会触发一次

export default {

  namespace: 'example',

  state: {},

>>>>>>> fd58cf3c0d09c9f74956b6acf6aece890f65d954
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
<<<<<<< HEAD
  //异步的方法调用
=======

>>>>>>> fd58cf3c0d09c9f74956b6acf6aece890f65d954
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
<<<<<<< HEAD
  //方法，调用来把页面，后台传来的值存入到state中
=======

>>>>>>> fd58cf3c0d09c9f74956b6acf6aece890f65d954
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
