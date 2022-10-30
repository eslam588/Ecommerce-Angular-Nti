const app=require('./app/src');
const port = process.env.PORT || 5000
app.listen(port ,() => console.log(`successfully started server listen at ${port}`))