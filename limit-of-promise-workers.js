const privateFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('resolve')
      resolve(1)
    }, 100)}
  )
}

const loadLimitResources = (urls, callback, limit = 5) => {
  let counterOfRequests = 0
  let currentIdx = 0
  const results = []

  const handleRequest = (resultOfRequest) => {
    counterOfRequests--
    results.push(resultOfRequest)

    if (currentIdx === urls.length - 1) {
      return callback(results)
    }
  }

  const loadData = (url) => {
    counterOfRequests++

    privateFetch(url)
      .then(
        res => handleRequest(res),
        err => handleRequest(err),
      ).finally(() => {
        console.log(`finally, counterOfRequests - ${counterOfRequests}`)
    })
  }

  while (currentIdx < urls.length - 1) {
    if (counterOfRequests <= limit) {

      loadData(urls[currentIdx])
      currentIdx++;
    }
  }
}

loadLimitResources(
  ['a', 'b', 'c', 'd', '1', '2', '3', '4'],
  (res) => { console.log(res) }
)











// function loadResources(urls: string[], callback: (data: unknown[]) => {}, limit = 5): void {
// function loadResources(urls, callback, limit = 5) {
//   let pendingPromises = []
//   let results = []
//   let usedWorkers = 0
//
//   const restUrls = [...urls]
//
//   const handleResponse = (resp, index) => {
//     results[index] = resp
//
//     usedWorkers--
//
//     if (restUrls.length === 0 && usedWorkers === 0) {
//       callback(results)
//     }
//
//     if (restUrls.length > 0 && usedWorkers < limit) {
//       const restUrlsLength = restUrls.length
//
//       addFetch(restUrls.shift(), urls.lenght - restUrlsLength)
//     }
//   }
//
//   const addFetch = (url, index) => {
//     fetch(url)
//       .then(
//         resp => handleResponse(resp, index),
//         err => handleResponse(resp, index)
//       )
//
//     usedWorkers++
//   }
//
//   for (let i = 0; i < limit; ++i) {
//     addFetch(restUrls.shift(), i)
//   }
// }
//
// const urls = [
//   'http://site.com/file1.json',
//   'http://site.com/file2.json',
//   'http://site.com/file3.json',
//   'http://site.com/file4.json',
// ];
//
// const cb = (data) => {
//   console.log(data)
// }
//
// loadResources(urls, cb)
