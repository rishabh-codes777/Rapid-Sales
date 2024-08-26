export default async function getData() {
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/weeklist`)
    const projects = await res.json()
    const data = projects.data;
    return data
  }
  