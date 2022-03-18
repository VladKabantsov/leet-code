// function hasCircularDependency(entrypoint: string, dependencies: Record<string, string[]>): boolean
const hasCircularDependency = (entryPoint, dependencies) => {
  const visitedNode = {}
  const queue = []

  queue.push(entryPoint)
  visitedNode[entryPoint] = true

  while (queue.length > 0) {
    const node = queue.shift()
    const neighbours = dependencies[node]

    for (let currentNeighbour of neighbours) {
      if (visitedNode[currentNeighbour]) {
        return true
      }

      queue.push(currentNeighbour)
      visitedNode[currentNeighbour] = true
    }
  }

  return false
}

const hasCircularDependencyDFS = (entryPoint, dependencies) => {
  const visited = {}

  const goToFile = (fileName) => {
    const files = dependencies[fileName]

    for (let currentFile of files) {
      const isCurrentInVisited = currentFile in visited

      if (isCurrentInVisited && visited[currentFile]) {
        return true
      }

      visited[currentFile] = true

      return goToFile(currentFile)
    }

    return false
  }

  return goToFile(entryPoint)
}

const tests = [
  { entryPoint: 'index.js', dependencies: {
    'index.js': ['foo.js', 'bar.js'],
    'foo.js': ['bar.js', 'baz.js'],
    'bar.js': ['baz.js'],
    'baz.js': ['bar.js'],
  }},
  { entryPoint: 'index.js', dependencies: {
    'index.js': ['foo.js', 'bar.js'],
    'foo.js': ['bar.js', 'baz.js'],
    'bar.js': ['baz.js'],
    'baz.js': [],
  }},
]

tests.forEach(({ entryPoint, dependencies }) => {
  console.log(hasCircularDependencyDFS(entryPoint, dependencies))
})




function hasCircularDependency(entrypoint: string, dependencies: Record<string, string[]>): boolean {
  const visited = {}

  const visitFile = (fileName) => {
    const innerDeps = dependencies[fileName]

    for (const innerFileName of innerDeps) {
      if (visited.hasOwnProperty(innerFileName) && visited[innerFileName] === 'gray') {
        return true
      }

      if (visited.hasOwnProperty(innerFileName) && visited[innerFileName] === 'black') {
        continue
      }

      visited[innerFileName] = 'gray'

      visitFile(innerFileName)

      visited[innerFileName] = 'black'
    }

    return false
  }

  const hasCircular = visitFile(entrypoint)

  return hasCircular
}

hasCircularDependency('index.js', {
  'index.js': ['foo.js', 'bar.js'],
  'foo.js': ['bar.js', 'baz.js'],
  'bar.js': ['baz.js'],
  'baz.js': ['bar.js'],
});
