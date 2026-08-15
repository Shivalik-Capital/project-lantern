import * as runtime from 'react/jsx-runtime'

const sharedComponents = {
  // Add custom MDX components here later if needed
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export function MDXContent({ code, components }: MDXProps) {
  const fn = new Function(code)
  const Component = fn({ ...runtime }).default
  return <Component components={{ ...sharedComponents, ...components }} />
}
