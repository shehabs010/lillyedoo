var app = new Vue({
    el: '#home-page-content',
    data: {
      selectedCategory:"1",
      slider:{
       Textpart1:'Entdecke unsere',
        Textpart2:' Hautfreundlichkeit',
       Btn:'Jetzt Deine Größe wählen',
       Img:'img/oekotex_de.png',
      },
    
     ProDetails:{ 

        Boxs : [{
          name : '1',
          size : '(2-3 KG)',
          path:'img/product/p-1.jpg'
        },
        {
          name : '2',
          size : '(3-4 KG)',
          path:'img/product/p-2.jpg'
        },
        {
          name : '3',
          size : '(4-7 KG)',
        path:'img/product/p-3.jpg'
        },
        {
          name : '4',
          size : '(7-10 KG)',
          path: 'img/product/p-4.jpg'
        },
        {
          name : '5',
          size : '(10-12 KG)',
          path:'img/product/p-5.jpg'
        }
      ],
      pragraph1:'Teste jetzt unsere Windeln und Feuchttücher - In Größe 1 - 3 enthält unser Testpaket unsere Feuchttücher mit 99 % Wasser, ab Gr. 4 erhältst Du unsere Sensitiven Feuchttücher. Wir zahlen die Produkte, Du nur den Versand.'
 
    },
      headTitle:{
        mainTitle:'Unser gratis Testpaket',
        subTitle:'Wähle Deine Größe',
        addTocart:'In den Warenkorb legen'
    },
    Lists:{
    proList:[{
      text:'Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro Lieferung.',
    },
    {
      text:'Preise inkl. MwSt., ggf. zzgl',
      link:'Versandkosten',
     
    }
  ]
},
howWorks:{
  title:'Wie es funktioniert',
  Dein:[{
    imgPath:'img/icons/1.svg',
    title:'DEIN TESTPAKET',
    content1:'Wir schenken Dir die Produkte',
    content2:' Du übernimmst nur das Porto',
    
  },
  {
    imgPath:'img/icons/2.svg',
    title:'DEINE FLEXIBILITÄT',
    content1:'Erste Monatsbox nach 14 Tagen für 49,50 € erhalten.',
    content2:' Oder noch vor der ersten Lieferung kündigen.',
    Linkpart1:'Erfahre hier mehr über das ',
    Linkpart2:'LILLYDOO Windel-Abo.'

  },
  {
    imgPath:'img/icons/3.svg',
    title:'DEINE MONATSBOX',
    content1:'Jederzeit Designs oder Lieferintervalle anpassen',
    content2:'oder die Windelgröße ändern.'
  },
]
},

  
  packages:{
    title:'15 FEUCHTTÜCHER MIT 99 % WASSER',
    orderList1:'0 % Parfüme & PEGs, 100 % biologisch abbaubar',
    

  

}
  },
   computed:{   
        Image:function(){
        var path='';
        var text='';
        if( this.selectedCategory==4 || this.selectedCategory==5){
         
          path='img/product/sensitive-wipes-2.jpg';
          text='Extra dickes und kompostierbares Tuch';
          
        }else {
          path='img/product/water-wipes-1.jpg';
          text='Natürlich rein, extra mild, Alternative zu "Wasser & Watte"';
        }
        console.log(path)
        return path;
      
        
      },
      textContent:function(){
      
        var text='';
        if( this.selectedCategory==4 || this.selectedCategory==5){
         
          text='Extra dickes und kompostierbares Tuch';
          
        }else {
          text='Natürlich rein, extra mild, Alternative zu "Wasser & Watte"';
        }
        return text;
      
        
      }
   },
  methods:{
    onSelectCategory:(cat) =>{
          this.app.selectedCategory=cat;
    }
  }

  })