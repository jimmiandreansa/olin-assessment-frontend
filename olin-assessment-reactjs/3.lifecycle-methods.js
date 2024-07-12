// componentDidMount adalah salah satu metode siklus hidup / lifecycle dalam komponen React JS yang
// dijalankan setelah komponen tersebut sudah dipasang / mounted ke dalam DOM, yang umumnya digunakan
// untuk melakukan operasi yang memerlukan akses ke DOM atau untuk memulai panggilan asinkron seperti
// pengambilan data dari API, pengaturan timer, atau menginisialisasikan thrird party library

import { Component } from "react";

class DidMount extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  render() {
    return (
      <div>
        <h1>This is componentDidMount</h1>
      </div>
    )
  }
}

export default DidMount;
