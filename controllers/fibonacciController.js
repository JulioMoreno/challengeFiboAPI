exports.getFibonacci = async (req, res) => {
  try {
    const n = req.params.n * 1 + 1;
    const fibonacci = (n) => {
      return Array.from({ length: n}).reduce(
        (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        []
      );
    };
  
    const resultFi = fibonacci(n);
    const result = resultFi[resultFi.length - 1]
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
