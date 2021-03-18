module.exports = (req, res) => {
  const Asciidoctor = require('asciidoctor')
  const asciidoctor = Asciidoctor();

  var html = asciidoctor.convertFile('https://asciidoctor-test-hlof4636q-cspidar.vercel.app/test.adoc', { to_file: false, standalone: true })
  // var html = asciidoctor.convert('Hello, _Asciidoctor_')
  // console.log(html)


  res.status(200).send(html);
};



