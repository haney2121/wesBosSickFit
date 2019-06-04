const { forwardTo } = require('prisma-binding');

const Query = {
  // async items(parent, args, context, info) {
  //   const items = await context.db.query.items();
  //   return items;
  // }
  //when not using auth or anything to change in db
  items: forwardTo('db')
};

module.exports = Query;
