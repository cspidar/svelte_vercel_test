module.exports = (req, res) => {
  const Asciidoctor = require('asciidoctor')
  const asciidoctor = Asciidoctor();

  // var html = asciidoctor.convertFile('/doc/test.adoc', { to_file: false, standalone: true })
  var html = asciidoctor.convert(
    
//:hardbreaks:    
    
`[options="header, autowidth",format=csv,frame=topbot]
|===
include::address1.csv[]
|===

[options="header, autowidth",format=csv,frame=topbot]
[cols="~, ~", options="header, autowidth",frame=topbot]
|===
|표시 |설명
|1 |설정 영역 지우기
|2 |붓 영역 그리기
|===
`


    
    )
  // console.log(html)


  res.status(200).send(html);
};



