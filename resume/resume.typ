#let data = json("data.json")

#set page("us-letter", margin: 0.5in)
#show link: set text(fill: blue.darken(20%))
#set text(font: "Noto Sans", size: 11pt)
#show heading: set text(font: "Libertinus Serif")
#show heading.where(level: 1): it => {
  grid(
    columns: (1fr, auto, 1fr),
    align: horizon,
    column-gutter: 0.6em,
    line(length: 100%),
    it,
    line(length: 100%),
  )
}
#show "|": set text(fill: gray)

#let notes(items) = [
  #for note in items [
    - #note
  ]
]

#let advised(names) = {
  if names.len() == 0 { return }
  let last = if names.len() == 2 { " and " } else { ", and " }
  [Advised by #names.map(a => [*#a*]).join(", ", last: last)]
}

#let dated-entry(item) = [
  == #item.name
  #v(0.3em)
  #item.start -- #item.end | #item.location

  #notes(item.notes)
  #v(0.3em)
]

#let links = data.contact.links
#if links.len() != 4 {
  panic("contact.links must contain email, github, linkedin, and website")
}

#let contact-link(item) = link(item.href, box(item.label))
#let contact-line(parts) = box(parts.join([ | ]))

#layout(size => {
  let name = text(24pt, weight: "bold", font: "Libertinus Serif")[#data.contact.name]
  let contact = text(10pt, stack(
    dir: ttb,
    spacing: 0.35em,
    align(right, contact-line((
      data.contact.location,
      contact-link(links.at(0)),
      contact-link(links.at(1)),
    ))),
    align(right, contact-line((
      contact-link(links.at(2)),
      contact-link(links.at(3)),
    ))),
  ))
  let name-size = measure(name)
  let contact-size = measure(contact)
  let gap = 8pt
  if name-size.width + gap + contact-size.width > size.width {
    panic(
      "header name and contact do not fit on one row ("
        + str(name-size.width)
        + " + "
        + str(contact-size.width)
        + " > "
        + str(size.width)
        + ")",
    )
  }
  box(width: size.width, height: calc.max(name-size.height, contact-size.height), {
    place(left + horizon, name)
    place(right + horizon, contact)
  })
})

= Education

#for edu in data.education [
  == #if "gpa" in edu [#edu.name | #edu.gpa GPA] else [#edu.name]
  #v(0.3em)
  #edu.when | #edu.location
  #v(0.3em)
  #notes(edu.notes)
  #v(0.3em)
]

= Publications

#bibliography(
  "personal-publications.bib",
  title: none,
  full: true,
  style: "ieee",
)

= Research Experience

#for item in data.research [
  == #if "link" in item { link(item.link)[#item.name] } else { item.name }
  #v(0.3em)
  #item.start -- #item.end | #item.location \
  #advised(item.advisors)
  
  #notes(item.notes)
  #v(0.3em)
]

= Leadership & Teaching Experience

#for item in data.leadership {
  dated-entry(item)
}

= Additional Technical Experience

#for item in data.tech {
  dated-entry(item)
}

= Technical Skills

#let tgray(content) = text(fill: gray.darken(50%), content)

#grid(
  columns: (1fr,) * data.skills.len(),
  column-gutter: 1em,
  ..data.skills.map(group => [
    == #group.prettyName
    #for skill in group.list [
      - #skill.name #tgray[(#skill.detail)]
    ]
  ]),
)

= Other Honors

#for honor in data.honors [
  - #honor.text
]
