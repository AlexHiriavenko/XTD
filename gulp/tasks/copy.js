// export const copy = () => {
//   return app.gulp
//     .src(app.path.src.dataBase)
//     .pipe(app.gulp.dest(app.path.dist.dataBase));
// };

export const copy = () => {
  return app.gulp
    .src([app.path.src.dataBase, app.path.src.videos], {
      base: app.path.srcFolder,
    })
    .pipe(app.gulp.dest(app.path.distFolder)); // Копируем в корень папки dist
};
