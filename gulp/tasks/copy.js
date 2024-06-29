export const copy = () => {
  return app.gulp
    .src(app.path.src.dataBase)
    .pipe(app.gulp.dest(app.path.dist.dataBase));
};
