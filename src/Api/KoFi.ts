// @ts-nocheck
// @ts-ignore
module.exports = {
    url: '/KoFi',
    method: "Post",
    auth: true,
    handler: async function (ctx) {
        ctx.res.send('Endpoint here!');
    },
}