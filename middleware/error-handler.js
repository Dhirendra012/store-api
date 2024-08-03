// This is a Custom error Handle
// Just import and add in app.use then it will work

const errorHandlerMiddleware = async (err, req, res, next) => {
  // console.log(err)
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware
