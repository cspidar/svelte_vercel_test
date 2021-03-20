module.exports = (req, res) => {
  const Asciidoctor = require('asciidoctor')
  const asciidoctor = Asciidoctor();

  // var html = asciidoctor.convertFile('/doc/test.adoc', { to_file: false, standalone: true })


  let html = asciidoctor.convert(
    
//:hardbreaks:    

`
123123123
`    
    )
  // console.log(html)





  
  res.status(200).send(html);
};



