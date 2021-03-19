import React from 'react'

import TextBox from '../../components/input/text/text-box.js'

export default class PageComponentQuery extends React.Component
{
  static propTypes = {

  }

  static defaultProps = {

  }

  render()
  {
    return (
      <form id="query-message" onsubmit={this.submit}>
        <TextBox theme={"dark"}>Name</TextBox>
        <TextBox theme={"dark"}>Subject</TextBox>
        <TextBox theme={"dark"}>Email</TextBox>
      </form>
    )
  }

  submit()
  {

  }
}
