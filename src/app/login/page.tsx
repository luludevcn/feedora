'use client'

export default function LoginPage() {
  const doLogin = async () => {
    console.log('submit');
    const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({}), headers: { 'Content-Type': 'application/json' } }).then((res) => {
      console.log(res);
      return res;
    });
    if (response.ok) {
      console.log(response.json())
    } else {
      alert('login failed')
    }
  }
  return (
    <></>
  )
}
