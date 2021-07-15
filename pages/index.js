import { useEffect, useState } from "react"

export default function Home() {
 let [data,setData]=useState(undefined)
 let [search,setSearch]=useState("")
 useEffect(()=>{
  (async()=>{
   const res = await fetch('/data.json')
   setData(await res.json())
  })()
 },[])
 const searched = data&&data.filter(v=>v.includes(search))
 return (
  <>
   <div className="px-5 py-12 mx-auto" style={{maxWidth:900}}>
    <h1 className="font-bold text-4xl text-center mb-5">รวมดาราในดวงใจ(ผู้น่ารัก)ที่เป่านกหวีดมาก่อน</h1>
    <div className="flex gap-4 justify-center items-center flex-col md:flex-row mb-4">
     <div className="shadow px-4 py-2 max-w-96 w-full flex flex-row items-center gap-3">
      <div>
       <div className="w-24 h-24 rounded-full shadow bg-cover bg-no-repeat mx-auto" style={{backgroundImage:'url(https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.18169-9/1013121_10151712233398291_1419679780_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGtt0k5XXv6K291Yl6-8RB2otaI-_Sjrbqi1oj79KOtugvqwca3BppaCyjFRlXtCZvm2GxIvy4CB8QMDjHWhe-x&_nc_ohc=sUVMxNgYTbMAX_SgVWj&_nc_ht=scontent.fbkk5-4.fna&oh=115507422aecc6393a5998983c32c05b&oe=60F50C68)'}}></div>
      </div>
      <div>
       <h4>TOP OF ตัวพ่อกลับใจ</h4>
       <h1 className="text-2xl font-bold">Drama-addict</h1>
       <p className="text-sm">ยิ่งขุดยิ่งสลิ่ม</p>
      </div>
     </div>
     <div className="shadow px-4 py-2 max-w-96 w-full flex flex-row items-center gap-3">
      <div>
       <div className="w-24 h-24 rounded-full bg-cover bg-no-repeat mx-auto" style={{backgroundImage:'url(https://www.matichon.co.th/wp-content/uploads/2019/01/%E0%B9%82%E0%B8%88-%E0%B8%99%E0%B8%B9%E0%B9%82%E0%B8%A7.jpg)'}}></div>
      </div>
      <div>
       <h4>TOP OF รักชาติตลอดกาล</h4>
       <h1 className="text-2xl font-bold">จิรายุส วรรธนะสิน</h1>
       <p className="text-sm">ไม่ต้องอธิบาย</p>
      </div>
     </div>
    </div>
    <div className="sticky top-0 bg-white p-2 border-b">
     <div className="bg-gray-200 w-full rounded-xl my-4 flex reletive">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 z-10 py-2 absolute object-center text-gray-400 ml-2"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path></svg>
      <input className="w-full outline-none bg-gray-200 pl-8 pr-2 py-2 rounded border focus:bg-white focus:border-blue-500" placeholder="ค้นหา" onChange={e=>setSearch(e.target.value)} value={search}/>
     </div>
    </div>
    <div className="divide-y">
     {searched&&searched.map((v,i)=><div key={i} className="px-4 py-2">
      {v}
     </div>)}
    </div>
    <hr className="my-4"/>
    <p>© {new Date().getFullYear()} PRECHADA</p>
    <h1 className="font-bold text-xl">FAQ</h1>
    <p className="font-bold">ทำไมมีชื่อฉันในเว็บไซต์นี้?</p>
    <p>เพราะว่าคุณเคยไปร่วมม็อปเป่านกหวีดไงละ!</p>
    <p className="font-bold">ฉันเป็นสลิ่มกลับใจ?</p>
    <p>ไม่อะ มันเป็นบาปกรรมที่ทำให้กับคนรุ่นต่อๆ ไป คุณสมควรที่จะมีชื่อบนเว็บไซต์นี้!</p>
    <p className="font-bold">ข้อมูลไม่ถูกต้อง</p>
    <p>1.ถ้าข้อมูลขาดบุคคลใด ติดต่อ Email Kate.kun69@gmail.com</p>
    <p>2.ถ้าข้อมูลนำชื่อบุคคลที่ไม่ได้ไปม็อปเป่านกหวีด ติดต่อ Email Kate.kun69@gmail.com</p>
   </div>
  </>
 )
}
