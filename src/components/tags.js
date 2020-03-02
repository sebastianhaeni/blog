import React from "react"

import kebabCase from "lodash/kebabCase"
import { Link } from "gatsby"

const Tags = ({ tags }) => {
  return tags.map((tag, i) => [
    i > 0 && ", ",
    <Link key={kebabCase(tag)} to={`/tags/${kebabCase(tag)}`}>{tag}</Link>,
  ])
}

Tags.defaultProps = {
  tags: [],
}

export default Tags
