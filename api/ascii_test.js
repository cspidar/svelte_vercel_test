module.exports = (req, res) => {
  const Asciidoctor = require('asciidoctor')
  const asciidoctor = Asciidoctor();

  // var html = asciidoctor.convertFile('/doc/test.adoc', { to_file: false, standalone: true })
  var html = asciidoctor.convert('Hello, _Asciidoctor_')
  // console.log(html)


  res.status(200).send(html);
};



