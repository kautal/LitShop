import express from 'express'
import bodyparser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', process.cwd() + '/view')

// Set url for static file
app.use('/static', express.static(process.cwd() + '/static'))

app.get('/', async (req, res) => {
    res.render('index')
})

app.listen(port, () => { console.log(`Listening on port ${port}`) })
