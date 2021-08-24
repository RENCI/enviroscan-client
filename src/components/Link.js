import React from 'react'
import { Link as ReachRouterLink } from '@reach/router'

const ExternalLink = ({ to, children }) => <a href={ to } target="blank" rel="noopener noreferrer">{ children }</a>

export const Link = ({ to, children, ...props }) => {
  const externalUrlPattern = new RegExp(/^https?:\/\//)
  const match = externalUrlPattern.exec(to)
  const LinkComponent = match ? ExternalLink : ReachRouterLink
  return <LinkComponent to={ to } { ...props }>{ children }</LinkComponent>
}
