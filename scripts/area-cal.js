 function calculaterTrianglArea(){
     const bassFainder = document.getElementById('bass-fainder');
     const bassfainderval = bassFainder.value;
      const bass = parseFloat(bassfainderval)
    //   console.log(bass)
     
     const heightFinder = document.getElementById('height-finder');
     const heightfinderval = heightFinder.value;
     const height = parseFloat(heightfinderval)
    //  console.log(height)

     const triangleCalculater = 0.5 * bass * height;
     console.log(triangleCalculater)

     const triangleareaElement = document.getElementById('triangle-area');
     const triangleareaString = triangleCalculater.innerText;
     const triangleArea = parseFloat(triangleareaString);

     triangleareaElement.innerText = triangleCalculater;

    //  add area calculation
  addToCalculationEntry('Triangle', triangleCalculater);
 }

 function calculaterRrianglArea(){
      const widthfainderElement = document.getElementById('width-fainder')
      const widthfainderVal = widthfainderElement.value;
     const widthFainder = parseFloat(widthfainderVal)
    //  console.log(widthFainder)

    const lengthfinderElement = document.getElementById('length-finder');
    const lengthfinderVal = lengthfinderElement.value;
    const lengthFinder = parseFloat(lengthfinderVal)
    // console.log(lengthFinder)
    // chek  type of input 
     if(isNaN(widthFainder) || isNaN(lengthFinder)){
      alert('please insert a number');
       return;  
      //  return deyar  কারনে Area তে NaN লিখা দেখায় না 
     }

   const RriangleCalculater = widthFainder * lengthFinder
  //  console.log(RriangleCalculater)

  const RectangleareaElement = document.getElementById('Rectangle-area');
  const RectangleareaVal = RectangleareaElement.innerText;
  const RectangleArea  = parseFloat(RectangleareaVal)
  // console.log(RectangleArea)
  RectangleareaElement.innerText = RriangleCalculater;
     
  //  add area calculation
  addToCalculationEntry('Rectangle', RriangleCalculater);
 }

//  reusable function  for parallelogram
 function calculaterParallelogramArea (){
   const  bassPara = getInputValu('bass-para-find')
  //  console.log(bassPara);
    const heightPara = getInputValu('height-para-find');
  //  console.log(heightPara);
   
  // chek  type of input 
  if(isNaN(bassPara) || isNaN(heightPara)){
    alert('please insert a number');
     return;  
    //  return deyar  কারনে Area তে NaN লিখা দেখায় না 
   }

  
   const parallelogramArea = bassPara * heightPara;
  //  console.log(parallelogramArea);
    // const parallelogramareaElement = document.getElementById('parallelogram-area');
    // parallelogramareaElement.innerText = parallelogramArea


       const parallelogramarea = setElementInnerText('parallelogram-area', parallelogramArea);
        console.log(parallelogramarea);

        // add to Claculation entry
        addToCalculationEntry('parallelogram',parallelogramArea )
 }

//  reusabale function for Ellipse

function calculaterEllipseArea(){
  // const fastRedious = document.getElementById('Ellipse-Fast-radious'); এইটা করার দরকার নাই 
   const fastRediuosPushFunction = getInputValu('Ellipse-Fast-radious');
  //  console.log(fastRediuosPushFunction)
  //  const secondRedious = document.getElementById('Ellipse-second-radious') এইটা করার দরকার নাই
   const secondRediouspushFunction = getInputValu('Ellipse-second-radious')
  //  console.log(secondRediouspushFunction)

  // chek  type of input 
  if(isNaN(fastRediuosPushFunction) || isNaN(secondRediouspushFunction)){
    alert('please insert a number');
     return;  
    //  return deyar  কারনে Area তে NaN লিখা দেখায় না 
   }

   const EllipseCalculoter = 3.14 * fastRediuosPushFunction *secondRediouspushFunction;
   const EllipseTowdecimel = EllipseCalculoter.toFixed(2) 
       setElementInnerText('Ellipse-area', EllipseTowdecimel );
      //  add area calculation
      addToCalculationEntry('Ellipse', EllipseTowdecimel);
}

//  get input value function reusable
 function getInputValu (field){
  const inputFienld = document.getElementById(field);
  const inputFienldValue = inputFienld.value;
  const value = parseFloat(inputFienldValue);
  return value;

 }

  // reusebsle function for set value in span tag 
 function setElementInnerText (ElementId , area){
   const element = document.getElementById(ElementId)
    element.innerText = area;
  }

  // add to calculation entry  
  /**
   * 1. gwte this where you set this value 
   * 2.creat a element where you add
   * 3 set innerMTML .
   * 4.apend the creat element as a child of the parent 
   *   
   * * */
   function addToCalculationEntry(areaType ,area){
     console.log(areaType +' '+ area)
     const calculationEntry = document.getElementById('calculation-entry');  
    //  সিরিয়াল নাম্বার নিয়ে আসার জন্য 
      const count = calculationEntry.childElementCount;

      const p = document.createElement('p');
      p.innerHTML = `${count+ 1} .${areaType} ${area} cm <sup>2</sup> 
      <button class="btn btn-sm btn-success my-2">Convart</button>`;
      calculationEntry.appendChild(p);

   }
/**
 * 01: Data vallid করার জন্য input="text" এর জাইগাই 'number', 'date', ' email ' ব্যবাহার করা জায়
 * 02:chike type using typeof
 * 03: (NaN) NaN means Not a Number
 * */


 
  