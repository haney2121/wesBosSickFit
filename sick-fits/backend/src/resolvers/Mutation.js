const Mutations = {
  //parent, args, context, info - promises
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    return item;
  }
};

module.exports = Mutations;
