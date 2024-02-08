const domainName = (url) => {
  const pre = ["https://", "http://", "www.", ""];
  const withoutPre = pre
    .map((prefijo) => {
      if (url.includes(prefijo) === true) {
        return url.substring(url.indexOf(prefijo) + prefijo.length);
      }
    })
    .filter((element) => element != null);
  // console.log(withoutPre);
  const domain = withoutPre
    .sort((a, b) => a.length - b.length)[0]
    .split(".")[0];
  // console.log(domain);
  return domain;
};

domainName("www.xakep.ru");
