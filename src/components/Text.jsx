import  {createElement} from 'react'

function Text({renderAs, content,componentsProps}) {
  if (renderAs === 'div' || renderAs === 'span') {
    return <div dangerouslySetInnerHTML={{ __html: content }} {...componentsProps} />;
  } else {
    return createElement(renderAs, componentsProps, content);
  }
}

export default Text