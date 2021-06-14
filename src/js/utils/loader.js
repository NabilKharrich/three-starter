async function loadAsset(
  loaderClass = new loaderClass(),
  elementPath = "pathToElement" || [],
  extendFn = function () {}
) {
  const loader = new loaderClass();
  extendFn(loader);

  const array = await Promise.all(
    elementPath.map((src) =>
      loader
        .loadAsync(src)
        .then((res) => {
          console.log("resource loaded");
          //   update current + check current / total
          return res;
        })
        .catch(() => {
          //   update current + check current / total
          console.warn("error");
        })
    )
  );
  return array;
}

export { loadAsset };
