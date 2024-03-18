import Navbar from './../Navbar/Navbar';
import './Travel.css'
import Travel1 from './image/สามพันโบก.png'
import Travel2 from './image/หาดชมดาว.png'
import Travel3 from './image/อุทยานแห่งชาติผาแต้ม.png'
import Travel4 from './image/น้ำตกแสงจันทร์.png'
import Travel5 from './image/วัดสิรินธรวรารามภูพร้าว.png'
import Travel6 from './image/วัดพระธาตุหนองบัว.png'
import Travel7 from './image/อุทยานแห่งชาติแก่งตะนะ.png'
import Travel8 from './image/น้ำตกห้วยหลวง.png'
import Travel9 from './image/ทุ่งหนองหญ้าม้า.png'
import Travel10 from './image/จุดชมวิวแม่น้ำสองสี.png'
import Footer from './../Home/Footer/Footer';
import Links from '../Links/Links';

const titleTravel = ['สามพันโบก' , 'แก่งหินงาม (หาดชมดาว)' ,'อุทยานแห่งชาติผาแต้ม' , `น้ำตกแสงจันทร์ (น้ำตกลงรู)` , 
`วัดสิรินธรวรารามภูพร้าว`, `วัดพระธาตุหนองบัว` , `อุทยานแห่งชาติแก่งตะนะ` ,`น้ำตกห้วยหลวง อุทยานแห่งชาติภูจองนายอย`,`ทุ่งหนองหญ้าม้า`,`จุดชมวิวแม่น้ำสองสี โขงเจียม`]
const image = [Travel1, Travel2,Travel3 ,Travel4 ,Travel5 , Travel6 ,Travel7,Travel8 ,Travel9 ,Travel10 ]
const url = [
`https://www.google.com/search?q=%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B9%82%E0%B8%9A%E0%B8%81&rlz=1C1SQJL_enTH923TH923&oq=%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B9%82%E0%B8%9A%E0%B8%81&aqs=chrome..69i57j0i19l7j46i19i340j0i19.1928j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AOaemvL9totRjRO2TIXGS8oXQIb1bnQjvg:1636446724749&rflfq=1&num=10&rldimm=2539252612855707489&lqi=ChvguKrguLLguKHguJ7guLHguJnguYLguJrguIFI15iq6uWAgIAIWisQABABEAIYABgBGAIiHeC4quC4suC4oSDguJ7guLHguJkg4LmC4Lia4LiBkgENY3J1aXNlX2FnZW5jeZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOSmFtSXpVMUJSRUFFqgElEAEqISId4Liq4Liy4LihIOC4nuC4seC4mSDguYLguJrguIEoNQ&phdesc=haW0kS2Guco&ved=2ahUKEwjk2NuN74r0AhWUV30KHf5LBTcQvS56BAgKEE8&rlst=f#rlfi=hd:;si:17221454672939017154,l,ChvguKrguLLguKHguJ7guLHguJnguYLguJrguIFI8PHo18yPgIAIWisQABABEAIYABgBGAIiHeC4quC4suC4oSDguJ7guLHguJkg4LmC4Lia4LiBkgESdG91cmlzdF9hdHRyYWN0aW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJUTW5GaWFqaDNSUkFCqgElEAEqISId4Liq4Liy4LihIOC4nuC4seC4mSDguYLguJrguIEoNQ,y,EqkZYMbkTMY;mv:[[16.0349209,105.89303919999999],[13.6563432,100.34106369999999]]`,
`https://www.google.com/search?q=%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%8A%E0%B8%A1%E0%B8%94%E0%B8%B2%E0%B8%A7&rlz=1C1SQJL_enTH923TH923&tbm=lcl&sxsrf=AOaemvKMq-Wadb2-cHfFMDuaa7oMH1Bnfg%3A1636449847113&ei=Nz6KYc2wBsevoASIg5vYCw&oq=%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%8A%E0%B8%A1%E0%B8%94%E0%B8%B2%E0%B8%A7&gs_l=psy-ab.3...500018.500018.0.501247.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..0.0.0....0.uCPgZzd78os#rlfi=hd:;si:16216076066054869170,l,ChjguKvguLLguJTguIrguKHguJTguLLguKdI2PSQtLyugIAIWigQABABEAIYABgBGAIiGuC4q-C4suC4lCDguIrguKEg4LiU4Liy4LinkgESdG91cmlzdF9hdHRyYWN0aW9u,y,JE0n_Q91FBg;mv:[[15.9075619,105.34759299999999],[15.906352499999999,105.34109339999999]]`,
`https://www.google.com/search?q=%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%9C%E0%B8%B2%E0%B9%81%E0%B8%95%E0%B9%89%E0%B8%A1&rlz=1C1SQJL_enTH923TH923&tbm=lcl&sxsrf=AOaemvJGRljj1qrRsZsjbb-x9uxCTzH-Dw%3A1636446739278&ei=EzKKYaazEJvRrQGZr7A4&oq=%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%9C%E0%B8%B2%E0%B9%81%E0%B8%95%E0%B9%89%E0%B8%A1&gs_l=psy-ab.3...847211.847211.0.848272.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..0.0.0....0.8dYk5LoNnwA#rlfi=hd:;si:2813972152691965106,l,CjzguK3guLjguJfguKLguLLguJnguYHguKvguYjguIfguIrguLLguJXguLTguJzguLLguYHguJXguYnguKFIkcrRVlpQEAAQARACGAAYARgCIj7guK3guLjguJfguKLguLLguJnguYHguKvguYjguIfguIrguLLguJXguLQg4Lic4LiyIOC5geC4leC5ieC4oSoCCAKSAQ1uYXRpb25hbF9wYXJr,y,KDYIOW-XFaU;mv:[[15.399133099999998,105.50831459999999],[15.398780799999999,105.50736479999999]]`,
`https://www.google.com/search?q=%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C&rlz=1C1SQJL_enTH923TH923&oq=%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C&aqs=chrome..69i57j0i19l6j46i19i175i199i395j0i19i395j0i19.911j1j9&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:2&tbm=lcl&sxsrf=AOaemvL9QJtZc868VPCS7nTfgR4UgPGp5g:1636448000258&rflfq=1&num=10&rldimm=15857872500938640081&lqi=CirguJnguYnguLPguJXguIHguYHguKrguIfguIjguLHguJnguJfguKPguYxIxIaB1-WAgIAIWjUQABABGAAYASIr4LiZ4LmJ4Liz4LiV4LiBIOC5geC4quC4h-C4iOC4seC4meC4l-C4o-C5jJIBDW5hdGlvbmFsX3BhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnBibG8yTjAxbkVBRaoBMxABKi8iK-C4meC5ieC4s-C4leC4gSDguYHguKrguIfguIjguLHguJnguJfguKPguYwoNQ&ved=2ahUKEwj2gv7t84r0AhXiH7cAHacZAmUQvS56BAgSEEU&rlst=f#rlfi=hd:;si:15857872500938640081,l,CirguJnguYnguLPguJXguIHguYHguKrguIfguIjguLHguJnguJfguKPguYxIxIaB1-WAgIAIWjUQABABGAAYASIr4LiZ4LmJ4Liz4LiV4LiBIOC5geC4quC4h-C4iOC4seC4meC4l-C4o-C5jJIBDW5hdGlvbmFsX3BhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnBibG8yTjAxbkVBRaoBMxABKi8iK-C4meC5ieC4s-C4leC4gSDguYHguKrguIfguIjguLHguJnguJfguKPguYwoNQ;mv:[[15.516086277319028,105.58990008444927],[15.51572632268097,105.58952651555073]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2`,
`https://www.google.com/search?q=%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%A3%E0%B8%A7%E0%B8%A3%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%A0%E0%B8%B9%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A7&rlz=1C1SQJL_enTH923TH923&tbm=lcl&sxsrf=AOaemvIFNkh2BvvSSZ9VFsnjM8C1tclXQg%3A1636448011920&ei=CzeKYcnCN46C-Qa2jK_IBA&oq=%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%A3%E0%B8%A7%E0%B8%A3%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%A0%E0%B8%B9%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A7&gs_l=psy-ab.3...350962.350962.0.352115.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..0.0.0....0.htWnN6RSN0M#rlfi=hd:;si:14117659150327545606,l,CkXguKfguLHguJTguKrguLTguKPguLTguJnguJjguKPguKfguKPguLLguKPguLLguKHguKDguLnguJ7guKPguYnguLLguKdI26rvkoergIAIWnEQABAEEAUQBhAHEAgYABgBGAIYAxgEGAUYBhgHGAgiTeC4p-C4seC4lCDguKrguLTguKPguLQg4LiZIOC4mOC4oyDguKcg4Lij4LiyIOC4o-C4suC4oSDguKDguLkg4Lie4Lij4LmJ4Liy4LinKgIIApIBD2J1ZGRoaXN0X3RlbXBsZQ,y,HWktEEKbBKw;mv:[[15.148980877319028,105.46801945661178],[15.148620922680971,105.46764654338821]]`,
`https://www.google.com/search?q=%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7&rlz=1C1SQJL_enTH923TH923&tbm=lcl&sxsrf=AOaemvKcl0QFnj4VQIJ06CutSKW_vVNZNg%3A1636449154793&ei=gjuKYeveL9XTz7sP0eqoiAE&oq=%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7&gs_l=psy-ab.3...365987.365987.0.367082.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..0.0.0....0.4-DOcvv03rc#rlfi=hd:;si:581784839549946491,l,CjPguKfguLHguJTguJ7guKPguLDguJjguLLguJXguLjguKvguJnguK3guIfguJrguLHguKdI8e3e-eWAgIAIWkwQABABEAIQAxgAGAEYAhgDIjbguKfguLHguJQg4Lie4Lij4LiwIOC4mOC4suC4leC4uCDguKvguJnguK3guIfguJrguLHguKcqAggCkgEPYnVkZGhpc3RfdGVtcGxl,y,Hbs1pz_Y4d8;mv:[[15.263517177319024,104.83919985795117],[15.263157222680968,104.83882674204881]]`,
`https://www.google.com/search?q=%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%95%E0%B8%B0%E0%B8%99%E0%B8%B0&rlz=1C1SQJL_enTH923TH923&tbm=lcl&sxsrf=AOaemvLxhn7EHUglpcGYrAK7D5R_bJvF1A%3A1636449522745&ei=8jyKYb7oLNngz7sP4ducyAc&oq=%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%95%E0%B8%B0%E0%B8%99%E0%B8%B0&gs_l=psy-ab.3...320752.320752.0.323335.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..0.0.0....0.xNK0-8m1Y68#rlfi=hd:;si:17692298642808129378,l,CkLguK3guLjguJfguKLguLLguJnguYHguKvguYjguIfguIrguLLguJXguLTguYHguIHguYjguIfguJXguLDguJnguLBIw6Pl8wFaWxAAEAEQAhADGAAYARgCGAMiReC4reC4uOC4l-C4ouC4suC4meC5geC4q-C5iOC4h-C4iuC4suC4leC4tCDguYHguIHguYjguIcg4LiV4LiwIOC4meC4sCoCCAKSAQ1uYXRpb25hbF9wYXJr,y,DHWd6G0wAG4;mv:[[15.3123728,105.4881695],[15.2966737,105.47160819999999]]`,
`https://www.google.com/search?q=%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87&rlz=1C1SQJL_enTH923TH923&tbm=lcl&sxsrf=AOaemvIDbWS8GAiLaBtw-kfF0WJM82r7dA%3A1636448364807&ei=bDiKYeLdMM2loASv-pzAAQ&oq=%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87&gs_l=psy-ab.3...285811.285811.0.286689.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..0.0.0....0.JupdKObwqvI#rlfi=hd:;si:16242856224512616527,l,CifguJnguYnguLPguJXguIHguKvguYnguKfguKLguKvguKXguKfguIdIiJeOnry2gIAIWjMQABgAGAEYAiIp4LiZ4LmJ4Liz4LiV4LiBIOC4q-C5ieC4p-C4oiDguKvguKXguKfguIeSARJ0b3VyaXN0X2F0dHJhY3Rpb26aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUTJNRTlMTWpablJSQUI,y,ijk1nmEzW9E;mv:[[15.678137699999999,105.6013093],[14.363918499999999,105.1858021]]`,
`https://www.google.com/maps/place/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B8%8D%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%89%E0%B8%B2/@15.1616657,104.9238793,14z/data=!4m9!1m2!2m1!1z4LiX4Li44LmI4LiH4Lir4LiZ4Lit4LiH4Lir4LiN4LmJ4Liy4Lih4LmJ4Liy!3m5!1s0x311683f51be495df:0xf860874245e9654a!8m2!3d15.1616667!4d104.9413889!15sCi3guJfguLjguYjguIfguKvguJnguK3guIfguKvguI3guYnguLLguKHguYnguLJaMiIw4LiX4Li44LmI4LiHIOC4q-C4meC4reC4hyDguKvguI3guYnguLIg4Lih4LmJ4LiykgENc2Vhc29uYWxfbGFrZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VRMmFEVmxkWFpCUlJBQg`,
`https://www.google.com/search?q=%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%8A%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AA%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B5+%E0%B9%82%E0%B8%82%E0%B8%87%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B8%A1&rlz=1C1SQJL_enTH923TH923&tbm=lcl&sxsrf=AOaemvJwaXFSLL-unPIYje2I0-xaBz5gSg%3A1636448652386&ei=jDmKYZD_Fv6Y4-EP-rahWA&oq=%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%8A%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AA%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B5+%E0%B9%82%E0%B8%82%E0%B8%87%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B8%A1&gs_l=psy-ab.3...500113.500113.0.501275.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..0.0.0....0.4HDGO1xuBxw#rlfi=hd:;si:8868158647447063190,l,ClLguIjguLjguJTguIrguKHguKfguLTguKfguYHguKHguYjguJnguYnguLPguKrguK3guIfguKrguLUg4LmC4LiC4LiH4LmA4LiI4Li14Lii4LihSMrklJzMj4CACFp3EAAQARACEAMQBBAFGAAYARgCGAMYBBgFGAYiV-C4iOC4uOC4lCDguIrguKEg4Lin4Li04LinIOC5geC4oeC5iOC4meC5ieC4syDguKrguK3guIcg4Liq4Li1IOC5guC4guC4h-C5gOC4iOC4teC4ouC4oSoCCAKSAQtzY2VuaWNfc3BvdA,y,0UZIxh877cw;mv:[[15.31724497731903,105.50276460578344],[15.316885022680975,105.50239139421656]]`
]
const descriptionTravel = [`
สามพันโบก สุดยอดสิ่งอัศจรรย์ทางธรรมชาติที่เป็นแหล่งท่องเที่ยวสำคัญของจังหวัดอุบลราชธานี 
ว่ากันว่านี่คือแกรนด์แคนยอนเมืองไทยกันเลยทีเดียวโดยเป็นกลุ่มหินทรายตามแนวเทือกเขาภูพานตอนปลายทอดตัวยาวริมฝั่งโขงไทยและลาว 
โดดเด่นด้วยช่องหินรูปร่างแปลกประหลาดที่ถูกกัดเซาะจนกลายเป็นธรรมชาติอันน่าตื่นตาตื่นใจไปทั่วทั้งบริเวณและไฮไลท์เด็ดของที่นี่ก็คือไปตามหา
 มิกกี้เมาส์ ที่ซ่อนตัวรอให้เราไปหาให้เจอ`
 ,
 `เมื่อไปถึงสามพันโบก ก็ไม่อยากให้พลาด แก่งหินงาม หรือ 
 หาดชมดาว ซึ่งเป็นที่เที่ยวที่มีมานานแล้วแต่เพิ่งเปิดตัวอย่างเป็นทางการได้ไม่นานและอยู่ในจุดไม่ไกลจากสามพันโบกมากนัก 
 จึงสามารถไปเที่ยวต่อกันได้ ถึงแม้จะมีความคล้ายกันแต่ะก็มีเอกลักษณ์ที่ต่างกันก็คือ หาดชมดาวจะเป็นลานกว้างๆ มีความเป็นริ้วๆ 
 หรือมีพื้นที่เป็นชั้นๆ ซึ่งมีความหลากหลายของหินที่ปรากฏให้เห็น และจุดไฮไลท์ก็คือผาหินที่มีความโค้งเว้าจนกลายเป็นแอ่งน้ำที่มีน้ำไหลผ่าน 
 และยังมีก้อนหินอยู่ตรงเกาะกลางน้ำเรียกว่า หินชมนภา `
 ,
 `อุทยานแห่งชาติผาแต้ม เป็นอุทยานขนาดใหญ่และเป็นสถานที่ท่องเที่ยวสำคัญของอุบลราชธานี ที่มีจุดท่องเที่ยวน่าสนใจอยู่หลายจุด ที่เด่นๆ ที่คนมักจะไปเที่ยวชมกันก็คือ "ผาชะนะได" เป็นหน้าผาที่มีหินยื่นออกไป และเป็นจุดที่อยู่ตะวันออกที่สุดของไทย จึงมักไปเพื่อชมพระอาทิตย์ขึ้นแสงแรกของไทย และเป็นจุดชมวิวที่สวยมาก มองไปเบื้องล่างเห็นแม่น้ำโขงที่กั้นกลางระหว่าง ไทย-ลาว หากเจออากาศดีๆ ก็จะได้เห็นวิวทะเลหมอก 
 จุดต่อไปที่ยังคงอยู่ในอุทยานฯ ผาแต้ม ก็คือ "เสาเฉลียง" เป็นเสาหินสูงประมาณ 20 เมตร รูปร่างคล้ายเห็ด ที่เกิดขึ้นเองตามธรรมชาติ โดยเป็นหินที่เกิดจากสองยุค คือหินด้านบนเกิดในยุคครีเตรเซียสและส่วนที่เป็นเสาเกิดในยุคได้โนเสาร์ จึงเป็นจุดไฮไลท์อีกหนึ่งแห่งที่ต้องห้ามพลาด และอีกจุดหนึ่งในอุทยานนี้ก็คือ "ทุ่งดอกไม้ดงนาทาม" ตรงจุดนี้จะเป็นทุ่งดอกดงนาทาม เป็นดอกเล็กๆ หลากสี และยังมีดอกไม้ป่าอื่นๆ เข้ามาแซม เหมาะแก่การมาถ่ายรูปเล่น สาวๆ เตรียมชุดไว้ให้พร้อมเลย รับรองถ่ายรูปออกมาสวยมาก แต่ต้องไปช่วงหน้าหนาวถึงจะเป็นช่วงที่ดอกไม้บานสวยพอดี`
,
`น้ำตกแสงจันทร์ หรือที่ชาวบ้านมักเรียกว่า น้ำตกลงรู อีกหนึ่งความสวยงามโดยธรรมชาติสร้าง เพราะเป็นน้ำตกที่ไหลผ่านลอดรูลงมา และมีแสงลอดลงมา และด้วยน้ำตกที่ไหลงมาเป็นละอองฝอยผ่านช่องหินลงมา คล้ายกับแสงจันทร์ที่สาดส่อง เป็นความงามที่หาที่ไหนไม่ได้ และเป็นที่มาของชื่อว่าน้ำตกแสงจันทร์นั่นเอง`
,
`วัดสิรินธรวรารามภูพร้าว เป็นอีกหนึ่งความอันซีนอุบลราชธานี เพราะที่นี่คือ วัดเรืองแสง เป็นวัดที่สร้างมาอย่างสวยงามวิจิตรบรรจง ตั้งอยู่บนเนินขาสูงให้คล้ายกับอยู่ในป่าหิมพานต์ จุดเด่นของวัดนี้ต้องมาชมตอนกลางคืน เพราะจะมองเห็นภาพเรืองแสงของต้นกัลปพฤกษ์ รวมถึงบริเวณโดยรอบที่ส่องแสงเรืองรอง ทำให้วัดนี้กลายเป็นวัดเรืองแสงในยามกลางคืน `
,
`วัดพระธาตุหนองบัว เป็นหนึ่งในวัดสำคัญของอุบลราชธานี ที่ภายในมีการประดิษฐานพระธาตุเจดีย์ศรีมหาโพธิ์ โดยมีการจำลองมาจากเจดีย์จากพุทธคยา ประเทศอินเดีย ซึ่งสร้างขึ้นเพื่อเป็นสัญลักษณ์ในการครบรอบ 2500 ปีของพระพุทธศาสนาในปี พ.ศ.2500 อีกทั้งยังสามารถสักการะพระบรมสารีริกธาตุได้ภายในวัดพระธาตุหนองบัวแห่งนี้`
,
`อุทยานแห่งชาติแก่งตะนะ มีอาณาบริเวณครอบคลุมพื้นที่อำเภอโขงเจียม และอำเภอสิรินธร ของจังหวัดอุบลราชธานี เหมาะกับคนที่แสวงหาธรรมชาติอย่างแท้จริง เพราะเป็นเขตอุทยานที่มีป่าอุดมสมบูรณ์มาก และยังคงมีสัตว์ป่าอยู่หลากหลายชนิด เช่น กวาง หมี นก เป็นต้น และจุดที่สวยงามน่าไปเดินเล่นนั่งเล่นก็คือ ดอนตะนะ ที่เป็นเกาะกลางอยู่ตรงแม่น้ำมูล และอีกหนึ่งจุดไฮไลท์ก็คือ สะพานแขวน ที่เป็นสะพานาเดินข้ามที่ยาวที่สุดในประเทศไทย เป็นจุดที่สามารถถ่ายรูปเล่น หรือเดินชมวิวสวยๆ ได้เพลินๆ`
,
`
น้ำตกห้วยหลวง น้ำตกสวยที่ตกลงมาจากหน้าผาสูงถึง 45 เมตร ตั้งอยู่ภายในเขตอุทยานแห่งชาติภูจองนายอย ท่ามกลางผืนป่าที่สมบูรณ์สีเขียวขจี เป็นน้ำตกที่ทั้งใหญ่และอลังการมากๆ หากมีโอกาศควรเดินทางมาเที่ยวสักครั้ง`
,
`ชมธรรมชาติกันมาเยอะ ขอเอาใจสายถ่ายรูปสักหน่อย ใครอยากได้ฟีลทุ่งหญ้าสวยๆ เอาไว้ถ่ายรูปลงโซเชียลต้องไม่พลาดมาที่ ทุ่งหนองหญ้าม้า จะมีดอกไม้ดอกเล็กๆ ฟูฟ่องเต็มทุ่งไปหมด เป็นดอกกระดุมเงินที่สวยงามละลานตา รับรองว่าถ่ายออกมาสวยราวกับไปเมืองนอก แต่ถ้าอยากเก็บบรรยากาศดอกไม้สวยๆ แบบนี้ต้องไปช่วงฤดูหนาว พฤศจิกายน-ธันวาคม จะเป็นช่วงที่ดอกไม้บานเต็มทุ่ง `
,
`ความอันซีนของอุบลฯ ยังไม่หมดเพียงเท่านี้ ถ้าหากคุณไม่ได้มาชมแม่น้ำสองสีเดี๋ยวเค้าจะหาว่ามาไม่ถึง ที่นี่ที่โขงเจียม จะเป็นจุดบรรจบของแม่น้ำสองสาย คือ แม่น้ำมูลไหลลงมาบรรจบกับแม่น้ำโขง จึงมีการเรียกกันว่า โขงสีปูน มูลสีคราม โดยหากอยากชมแม่น้ำสองสีแบบชัดๆ ก็มีจุดชมวิวให้เราขึ้นไปชม หรือใครอยากสัมผัสบรรยากาศริมแม่น้ำโขงก็สามารถนั่งเรือชมวิวได้`

]
const travel = (
    <>
        {titleTravel.map((titleTravel, i) => {
            return (
                <>
                    <div className="boxTravel" key={i}>
                        <div className="travelLeft">
                        <a href={url[i]} target="_blank" rel="noreferrer"> <img src={image[i]} alt="" /></a> 
                        </div>
                        <div className="travelRight">
                            <h3>{titleTravel}</h3>
                            <p>
                                {descriptionTravel[i]}
                                <br /><br />
                                <a href={url[i]} target="_blank" rel="noreferrer"> แผนที่ {titleTravel}</a>
                            </p>
                        </div>
                    </div>
                </>
            )
        })}

    </>
)


export default function Travel() {
    return (
        <div>
            <Navbar />
            <Links />
            <div className="travel">
                {/* <h3>สถานที่ท่องเที่ยวในจังหวัดอุบล</h3> */}
                {travel}
            </div>

        <Footer />
        </div>
    )
}
