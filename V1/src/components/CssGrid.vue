<template>
    建立2/1/1、且能依照可用空間縮放的長度軌道
    <pre>
    .wrapper1 {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
    }       
    </pre>

    <div class="wrapper1">
        <div class="item">One</div>
        <div class="item">Two</div>
        <div class="item">Three</div>
        <div class="item">Four</div>
        <div class="item span2">Five</div>
    </div>
    建立1/1/1、且能依照可用空間縮放的長度軌道
    <pre>
    .wrapper2 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    </pre>
    <div class="wrapper2">
        <div class="item">One</div>
        <div class="item">Two</div>
        <div class="item">Three</div>
        <div class="item">Four</div>
        <div class="item">Five</div>
    </div>
    第一個軌道有 500 像素，這個固定的寬度，會因此從可用空間先割一塊出去。接下來的空間會被劃分為三塊，並按比例指派給剩下的彈性軌道。
    <pre>
    .wrapper3 {
        display: grid;
        grid-template-columns: 500px 1fr 2fr;
    }
    </pre>
    <div class="wrapper3">
        <div class="item">One</div>
        <div class="item">Two</div>
        <div class="item">Three</div>
        <div class="item">Four</div>
        <div class="item">Five</div>
    </div>
    含有許多軌道的格線能用 repeat() 標記，以使軌道透過迴圈表列數次
    <pre>
    .wrapper4 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }   
    </pre>

    <div class="wrapper4">
        <div class="item">One</div>
        <div class="item">Two</div>
        <div class="item">Three</div>
        <div class="item">Four</div>
        <div class="item">Five</div>
    </div>
    有 20 像素的軌道，接著重複 1fr 軌道六次，最後以 20 像素的軌道做結。
    <pre>
     .wrapper {
        display: grid;
        grid-template-columns: 20px repeat(6, 1fr) 20px;
    }       
    </pre>

    <div class="wrapper5">
        <div class="item">One</div>
        <div class="item">Two</div>
        <div class="item">Three</div>
        <div class="item">Four</div>
        <div class="item">Five</div>
    </div>
    使用 grid-auto-rows 以確保由暗式格線建立的軌道，高度都會是 200 像素
    <pre>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 200px;
    }        
    </pre>

    <div class="wrapper6">
        <div class="item">One</div>
        <div class="item">Two</div>
        <div class="item">Three</div>
        <div class="item">Four</div>
        <div class="item">Five</div>
    </div>
    高度最小要 100 像素，最大則是 auto。auto 意味著大小會檢查內容大小，並適配這一行 cell 內最高項目的高度
    <pre>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }       
</pre>
<div class="wrapper7">
    <div class="item">One</div>
    <div class="item">Two
        <p>I have some more content in.</p>
        <p>This makes me taller than 100 pixels.</p>
    </div>
    <div class="item">Three</div>
    <div class="item">Four</div>
    <div class="item">Five</div>
</div>

the first item is placed against column line 1, and spans to column line 4, which in our case is the far right line
on the grid. It begins at row line 1 and ends at row line 3, therefore spanning two row tracks.

The second item starts on grid column line 1, and spans one track. This is the default so I do not need to specify
the end line. It also spans two row tracks from row line 3 to row line 5. The other items will place themselves into
empty spaces on the grid
<br />
<pre>
.wrapper8 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
}   
.box1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
}
.box2 {
    grid-column-start: 1;
    grid-row-start: 3;
    grid-row-end: 5;
}         
</pre>

    <div class="wrapper8">
        <div class="item box1">One</div>
        <div class="item box2">Two</div>
        <div class="item box3">Three</div>
        <div class="item box4">Four</div>
        <div class="item box5">Five</div>
    </div>
    Nesting grids
    A grid item can become a grid container. In the following example I have the three-column grid created earlier, with
    our two positioned items. In this case the first item has some sub-items. As these items are not direct children of
    the grid they do not participate in grid layout and so display in normal document flow.
    <br />
    <pre>
    .box3 {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    </pre>
    <div class="wrapper9">
        <div class="item box box3">
            <div class="item nested">a</div>
            <div class="item nested">b</div>
            <div class="item nested">c</div>
        </div>
        <div class="item box box2">Two</div>
        <div class="item box box3">Three</div>
        <div class="item box box4">Four</div>
        <div class="item box box5">Five</div>
    </div>
    Layering items with z-index
    Grid items can occupy the same cell. If we return to our example with items positioned by line number, we can change
    this to make two items overlap.
    <br />
    <pre>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 100px;
    }
    .box11 {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    .box22 {
        grid-column-start: 1;
        grid-row-start: 2;
        grid-row-end: 4;
    }        
    </pre>

    <div class="wrapper10">
        <div class="item box box11">One</div>
        <div class="item box box22">Two</div>
        <div class="item box box3">Three</div>
        <div class="item box box4">Four</div>
        <div class="item box box5">Five</div>
    </div>
    <pre>
Div Span使用方法
.wrapper11 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
}

.Box5Span2 {
    grid-column-start: 2;
    grid-column-end: span 2;
}
    </pre>
    <div class="wrapper11">
        <div class="item">One</div>
        <div class="item">Two</div>
        <div class="item">Three</div>
        <div class="item">Four</div>
        <div class="item Box5Span2">Five</div>
    </div>
</template>

<style>
.container {
    width: 100vw;
    height: 100vh;
    display: grid;
}
.span2{
    grid-row: span 2;
}

.wrapper1 {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
}

.wrapper2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.wrapper3 {
    display: grid;
    grid-template-columns: 500px 1fr 2fr;
}

.wrapper4 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.wrapper5 {
    display: grid;
    grid-template-columns: 20px repeat(6, 1fr) 20px;
}

.wrapper6 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
}

.wrapper7 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
}

.wrapper8 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
}

.box1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
}

.box2 {
    grid-column-start: 1;
    grid-row-start: 3;
    grid-row-end: 5;
}

.box3 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.wrapper10 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
}

.box11 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
}

.box22 {
    grid-column-start: 1;
    grid-row-start: 2;
    grid-row-end: 4;
}

.wrapper11 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
}

.Box5Span2 {
    grid-column-start: 2;
    grid-column-end: span 2;
}

.item {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</style>