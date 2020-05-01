class Socket {
  constructor (url) {
    this.url = url
    this.ws = {}
    this.reConnectTimer = null
    this.count = 0
  }
  connection () {
    window.ws = this.ws = new WebSocket(this.url)
    this.ws.onopen = () => {
      console.log(111)
    }
    this.ws.onmessage = (data) => {
      console.log(data.data)
    }
    this.ws.onclose = () => {
      this.reConnection()
    }
  }
  reConnection () {
    clearTimeout(this.reConnectTimer);
    this.count += 1
    if (this.ws.readyState == 1) {
      this.count = 0;
    } else {
      if (this.ws.readyState == 3) {
        this.connection();
      }
      this.reConnectTimer = setTimeout(() => {
        this.reConnection()
      }, 2000);
    }
  }
}

export default Socket