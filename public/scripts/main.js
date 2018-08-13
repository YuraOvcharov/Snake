let canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d");const width=500,height=500;let score=0;canvas.width=500,canvas.height=500;const blockSize=10;let widthInBlocks=500/blockSize,heightInBlocks=500/blockSize,drawBorder=function(){ctx.fillStyle="Gray",ctx.fillRect(0,0,500,blockSize),ctx.fillRect(0,500-blockSize,500,blockSize),ctx.fillRect(0,0,blockSize,500),ctx.fillRect(500-blockSize,0,blockSize,500)},drawScore=function(){ctx.font="20px Courier",ctx.fillStyle="Black",ctx.textAlign="left",ctx.textBaseline="top",ctx.fillText("Счет: "+score,blockSize,blockSize)},gameOver=()=>{clearTimeout(void 0),ctx.font="30px Courier",ctx.fillStyle="Black",ctx.textAlign="center",ctx.textBaseline="middle",ctx.fillText("Конец игры",250,250)},circle=(e,t,o,i)=>{ctx.beginPath(),ctx.arc(e,t,o,0,2*Math.PI),i?ctx.fill():ctx.stroke()};class Block{constructor(e,t){this.col=e,this.row=t}drawSquare(e){let t=this.col*blockSize,o=this.row*blockSize;ctx.fillStyle=e,ctx.fillRect(t,o,blockSize,blockSize)}drawCircle(e){let t=this.col*blockSize+blockSize/2,o=this.row*blockSize+blockSize/2;ctx.fillStyle=e,circle(t,o,blockSize/2,!0)}equal(e){return this.col===e.col&&this.row===e.row}}class Snake{constructor(){this.segments=[new Block(3,1),new Block(2,1),new Block(1,1)],this.direction="right",this.nextDirection="right"}draw(){this.segments[0].drawSquare("Red");for(let e=1;e<this.segments.length;e++)e%2?this.segments[e].drawSquare("yellow"):this.segments[e].drawSquare("blue")}move(){let e,t=this.segments[0];this.direction=this.nextDirection,"right"==this.direction?e=new Block(t.col+1,t.row):"down"==this.direction?e=new Block(t.col,t.row+1):"left"==this.direction?e=new Block(t.col-1,t.row):"up"==this.direction&&(e=new Block(t.col,t.row-1)),this.checkCollision(e)?gameOver():(this.segments.unshift(e),e.equal(apple.position)?(score+=1,apple.move()):this.segments.pop())}checkCollision(e){let t=0===e.col,o=0===e.row,i=e.col===widthInBlocks-1,l=e.row===heightInBlocks-1,c=t||o||i||l,n=!1;for(let t of this.segments)e.equal(t)&&(n=!0);return c||n}setDirection(e){"up"===this.direction&&"down"===e||"right"===this.direction&&"left"===e||"down"===this.direction&&"up"===e||"left"===this.direction&&"right"===e||(this.nextDirection=e)}}class Apple{constructor(){this.position=new Block(widthInBlocks/2,heightInBlocks/2)}draw(){this.position.drawCircle("LimeGreen")}move(){let e=Math.floor(Math.random()*(widthInBlocks-2)+1),t=Math.floor(Math.random()*(heightInBlocks-2)+1),o=0;for(;o<snake.segments.length;)snake.segments[o].col===e&&snake.segments[o].row===t?(e=Math.floor(Math.random()*(widthInBlocks-2)+1),t=Math.floor(Math.random()*(heightInBlocks-2)+1),o=0):o+=1;this.position=new Block(e,t)}}let snake=new Snake,apple=new Apple,direction={37:"left",38:"up",39:"right",40:"down"};$("body").keydown(function(e){let t=direction[e.keyCode];void 0!==t&&snake.setDirection(t)});let animationTime=100,levelOfComplexity=2*score,gameLoop=()=>{ctx.clearRect(0,0,500,500),drawScore(),snake.move(),snake.draw(),apple.draw(),drawBorder(),setTimeout(gameLoop,animationTime-levelOfComplexity)};gameLoop();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsInNjb3JlIiwiYmxvY2tTaXplIiwid2lkdGhJbkJsb2NrcyIsImhlaWdodEluQmxvY2tzIiwiZHJhd0JvcmRlciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd1Njb3JlIiwiZm9udCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiZ2FtZU92ZXIiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGUiLCJjaXJjbGUiLCJ4IiwieSIsInJhZGl1cyIsImZpbGxDaXJjbGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwic3Ryb2tlIiwiQmxvY2siLCJbb2JqZWN0IE9iamVjdF0iLCJjb2wiLCJyb3ciLCJ0aGlzIiwiY29sb3IiLCJjZW50ZXJYIiwiY2VudGVyWSIsIm90aGVyQmxvY2siLCJTbmFrZSIsInNlZ21lbnRzIiwiZGlyZWN0aW9uIiwibmV4dERpcmVjdGlvbiIsImRyYXdTcXVhcmUiLCJpIiwibGVuZ3RoIiwibmV3SGVhZCIsImhlYWQiLCJjaGVja0NvbGxpc2lvbiIsInVuc2hpZnQiLCJlcXVhbCIsImFwcGxlIiwicG9zaXRpb24iLCJtb3ZlIiwicG9wIiwibGVmdENvbGxpc2lvbiIsInRvcHRDb2xsaXNpb24iLCJyaWdodHRDb2xsaXNpb24iLCJib3R0b21Db2xsaXNpb24iLCJ3YWxsQ29sbGlzaW9uIiwic2VsZkNvbGxpc2lvbiIsInNlZyIsIm5ld0RpcmVjdGlvbiIsIkFwcGxlIiwiZHJhd0NpcmNsZSIsInJhbmRvbUNvbCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tUm93Iiwic25ha2UiLCIzNyIsIjM4IiwiMzkiLCI0MCIsIiQiLCJrZXlkb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwidW5kZWZpbmVkIiwic2V0RGlyZWN0aW9uIiwiYW5pbWF0aW9uVGltZSIsImxldmVsT2ZDb21wbGV4aXR5IiwiZ2FtZUxvb3AiLCJjbGVhclJlY3QiLCJkcmF3Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBSUEsT0FBU0MsU0FBU0MsZUFBZSxVQUNqQ0MsSUFBTUgsT0FBT0ksV0FBVyxNQUU1QixNQUFNQyxNQUFRLElBQ1JDLE9BQVEsSUFDZCxJQUFJQyxNQUFRLEVBR1pQLE9BQU9LLE1BTE8sSUFNZEwsT0FBT00sT0FMTyxJQVFkLE1BQU1FLFVBQVksR0FDbEIsSUFBSUMsY0FWVSxJQVVjRCxVQUN4QkUsZUFWVSxJQVVnQkYsVUFJMUJHLFdBQWEsV0FDYlIsSUFBSVMsVUFBWSxPQUNoQlQsSUFBSVUsU0FBUyxFQUFFLEVBakJMLElBaUJhTCxXQUN2QkwsSUFBSVUsU0FBUyxFQWpCSCxJQWlCY0wsVUFsQmQsSUFrQjhCQSxXQUN4Q0wsSUFBSVUsU0FBUyxFQUFFLEVBQUVMLFVBbEJQLEtBbUJWTCxJQUFJVSxTQXBCTSxJQW9CV0wsVUFBVSxFQUFFQSxVQW5CdkIsTUFzQlZNLFVBQVksV0FDWlgsSUFBSVksS0FBTyxlQUNYWixJQUFJUyxVQUFZLFFBQ2hCVCxJQUFJYSxVQUFZLE9BQ2hCYixJQUFJYyxhQUFlLE1BQ25CZCxJQUFJZSxTQUFTLFNBQVVYLE1BQU1DLFVBQVVBLFlBR3ZDVyxTQUFXLEtBR1hDLGtCQURJQyxHQUVKbEIsSUFBSVksS0FBTyxlQUNYWixJQUFJUyxVQUFZLFFBQ2hCVCxJQUFJYSxVQUFZLFNBQ2hCYixJQUFJYyxhQUFlLFNBQ25CZCxJQUFJZSxTQUFTLGFBQWNiLElBQVdDLE1BSXRDZ0IsT0FBUyxDQUFDQyxFQUFFQyxFQUFFQyxFQUFPQyxLQUNyQnZCLElBQUl3QixZQUNKeEIsSUFBSXlCLElBQUlMLEVBQUVDLEVBQUVDLEVBQU8sRUFBVSxFQUFSSSxLQUFLQyxJQUN0QkosRUFDQXZCLElBQUk0QixPQUVKNUIsSUFBSTZCLFVBS1osTUFBTUMsTUFDRkMsWUFBWUMsRUFBSUMsR0FDWkMsS0FBS0YsSUFBTUEsRUFDWEUsS0FBS0QsSUFBTUEsRUFHZkYsV0FBV0ksR0FDUCxJQUFJZixFQUFJYyxLQUFLRixJQUFLM0IsVUFDZGdCLEVBQUlhLEtBQUtELElBQU01QixVQUNuQkwsSUFBSVMsVUFBWTBCLEVBQ2hCbkMsSUFBSVUsU0FBU1UsRUFBRUMsRUFBRWhCLFVBQVVBLFdBRy9CMEIsV0FBV0ksR0FDUCxJQUFJQyxFQUFVRixLQUFLRixJQUFJM0IsVUFBWUEsVUFBWSxFQUMzQ2dDLEVBQVVILEtBQUtELElBQU01QixVQUFZQSxVQUFZLEVBQ2pETCxJQUFJUyxVQUFZMEIsRUFDaEJoQixPQUFPaUIsRUFBUUMsRUFBUWhDLFVBQVksR0FBRyxHQUkxQzBCLE1BQU1PLEdBQ0YsT0FBT0osS0FBS0YsTUFBUU0sRUFBV04sS0FBT0UsS0FBS0QsTUFBUUssRUFBV0wsS0FLdEUsTUFBTU0sTUFDRlIsY0FDSUcsS0FBS00sU0FBVyxDQUNaLElBQUlWLE1BQU0sRUFBRSxHQUNaLElBQUlBLE1BQU0sRUFBRSxHQUNaLElBQUlBLE1BQU0sRUFBRSxJQUVoQkksS0FBS08sVUFBWSxRQUNqQlAsS0FBS1EsY0FBZ0IsUUFFekJYLE9BTUlHLEtBQUtNLFNBQVMsR0FBR0csV0FBVyxPQUM1QixJQUFJLElBQUlDLEVBQUksRUFBR0EsRUFBSVYsS0FBS00sU0FBU0ssT0FBUUQsSUFDakNBLEVBQUUsRUFDRlYsS0FBS00sU0FBU0ksR0FBR0QsV0FBVyxVQUU1QlQsS0FBS00sU0FBU0ksR0FBR0QsV0FBVyxRQU14Q1osT0FDSSxJQUNJZSxFQURBQyxFQUFPYixLQUFLTSxTQUFTLEdBR3pCTixLQUFLTyxVQUFZUCxLQUFLUSxjQUNBLFNBQWxCUixLQUFLTyxVQUNMSyxFQUFVLElBQUloQixNQUFNaUIsRUFBS2YsSUFBSSxFQUFHZSxFQUFLZCxLQUNiLFFBQWxCQyxLQUFLTyxVQUNYSyxFQUFVLElBQUloQixNQUFNaUIsRUFBS2YsSUFBS2UsRUFBS2QsSUFBSSxHQUNmLFFBQWxCQyxLQUFLTyxVQUNYSyxFQUFVLElBQUloQixNQUFNaUIsRUFBS2YsSUFBSSxFQUFHZSxFQUFLZCxLQUNiLE1BQWxCQyxLQUFLTyxZQUNYSyxFQUFVLElBQUloQixNQUFNaUIsRUFBS2YsSUFBS2UsRUFBS2QsSUFBSSxJQUd2Q0MsS0FBS2MsZUFBZUYsR0FDcEI5QixZQUlKa0IsS0FBS00sU0FBU1MsUUFBUUgsR0FDbEJBLEVBQVFJLE1BQU1DLE1BQU1DLFdBQ3BCaEQsT0FBUSxFQUNSK0MsTUFBTUUsUUFFTm5CLEtBQUtNLFNBQVNjLE9BSXRCdkIsZUFBZWdCLEdBQ1gsSUFBSVEsRUFBOEIsSUFBYlIsRUFBS2YsSUFDdEJ3QixFQUE4QixJQUFiVCxFQUFLZCxJQUN0QndCLEVBQW1CVixFQUFLZixNQUFRMUIsY0FBZ0IsRUFDaERvRCxFQUFtQlgsRUFBS2QsTUFBUTFCLGVBQWlCLEVBRWpEb0QsRUFBZ0JKLEdBQWlCQyxHQUFpQkMsR0FBbUJDLEVBRXJFRSxHQUFnQixFQUVwQixJQUFLLElBQUlDLEtBQU8zQixLQUFLTSxTQUNiTyxFQUFLRyxNQUFNVyxLQUNYRCxHQUFnQixHQUd4QixPQUFPRCxHQUFpQkMsRUFHNUI3QixhQUFhK0IsR0FDYyxPQUFuQjVCLEtBQUtPLFdBQXVDLFNBQWpCcUIsR0FFRixVQUFuQjVCLEtBQUtPLFdBQTBDLFNBQWpCcUIsR0FFWCxTQUFuQjVCLEtBQUtPLFdBQXlDLE9BQWpCcUIsR0FFVixTQUFuQjVCLEtBQUtPLFdBQXlDLFVBQWpCcUIsSUFJdkM1QixLQUFLUSxjQUFnQm9CLElBSTdCLE1BQU1DLE1BQ0ZoQyxjQUNJRyxLQUFLa0IsU0FBVyxJQUFJdEIsTUFBTXhCLGNBQWdCLEVBQUVDLGVBQWlCLEdBR2pFd0IsT0FDSUcsS0FBS2tCLFNBQVNZLFdBQVcsYUFHN0JqQyxPQUNJLElBQUlrQyxFQUFZdkMsS0FBS3dDLE1BQU14QyxLQUFLeUMsVUFBWTdELGNBQWdCLEdBQUssR0FDN0Q4RCxFQUFZMUMsS0FBS3dDLE1BQU14QyxLQUFLeUMsVUFBVzVELGVBQWlCLEdBQUssR0FDN0RxQyxFQUFJLEVBQ1IsS0FBTUEsRUFBSXlCLE1BQU03QixTQUFTSyxRQUNqQndCLE1BQU03QixTQUFTSSxHQUFHWixNQUFRaUMsR0FBYUksTUFBTTdCLFNBQVNJLEdBQUdYLE1BQVFtQyxHQUNqRUgsRUFBWXZDLEtBQUt3QyxNQUFNeEMsS0FBS3lDLFVBQVk3RCxjQUFnQixHQUFLLEdBQzdEOEQsRUFBWTFDLEtBQUt3QyxNQUFNeEMsS0FBS3lDLFVBQVc1RCxlQUFpQixHQUFLLEdBQzdEcUMsRUFBSSxHQUVKQSxHQUFLLEVBR2JWLEtBQUtrQixTQUFZLElBQUl0QixNQUFPbUMsRUFBVUcsSUFJOUMsSUFBSUMsTUFBUSxJQUFJOUIsTUFDWlksTUFBUSxJQUFJWSxNQUVadEIsVUFBWSxDQUNYNkIsR0FBSSxPQUNKQyxHQUFJLEtBQ0pDLEdBQUksUUFDSkMsR0FBSSxRQUdSQyxFQUFFLFFBQVFDLFFBQVEsU0FBU0MsR0FDdkIsSUFBSWQsRUFBZXJCLFVBQVVtQyxFQUFNQyxjQUVkQyxJQUFqQmhCLEdBQ0FPLE1BQU1VLGFBQWFqQixLQWU1QixJQUFJa0IsY0FBZ0IsSUFDaEJDLGtCQUE0QixFQUFSN0UsTUFDcEI4RSxTQUFXLEtBQ1hsRixJQUFJbUYsVUFBVSxFQUFFLEVBcE9OLElBQ0EsS0FvT1Z4RSxZQUNBMEQsTUFBTWhCLE9BQ05nQixNQUFNZSxPQUNOakMsTUFBTWlDLE9BQ041RSxhQUNBNkUsV0FBV0gsU0FBU0YsY0FBY0Msb0JBR3RDQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/QvdCw0YHRgtGA0L7QudC60LAg0YXQvtC70YHRgtCwXHJcbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5jb25zdCB3aWR0aCA9IDUwMDsvL2NhbnZhcy53aWR0aDtcclxuY29uc3QgaGVpZ2h0ID01MDA7Ly9jYW52YXMuaGVpZ2h0O1xyXG5sZXQgc2NvcmUgPSAwO1xyXG5cclxuXHJcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuLy/QstGL0YfQuNGB0LvRj9C10Lwg0YjQuNGA0LjQvdGDINC4INCy0YvRgdC+0YLRgyDRj9GH0LXQudC60LhcclxuY29uc3QgYmxvY2tTaXplID0gMTA7XHJcbmxldCB3aWR0aEluQmxvY2tzID0gd2lkdGggLyBibG9ja1NpemU7XHJcbmxldCBoZWlnaHRJbkJsb2NrcyA9IGhlaWdodCAvIGJsb2NrU2l6ZTtcclxuXHJcblxyXG4vL9GA0LjRgdGD0LXQvCDRgNCw0LzQutGDXHJcbmxldCBkcmF3Qm9yZGVyID0gZnVuY3Rpb24oKXtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIkdyYXlcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLDAsd2lkdGgsYmxvY2tTaXplKTsvL9Cy0LXRgNGFXHJcbiAgICBjdHguZmlsbFJlY3QoMCxoZWlnaHQgLSBibG9ja1NpemUsd2lkdGgsYmxvY2tTaXplKTsvL9C90LjQt1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsMCxibG9ja1NpemUsaGVpZ2h0KTsvL9C70LXQstC+XHJcbiAgICBjdHguZmlsbFJlY3Qod2lkdGggLSBibG9ja1NpemUsMCxibG9ja1NpemUsIGhlaWdodCk7Ly/Qv9GA0LDQstC+XHJcbn07XHJcbi8v0JLRi9Cy0L7QtNC40Lwg0YHRh9C10YJcclxubGV0IGRyYXdTY29yZSA9IGZ1bmN0aW9uICgpe1xyXG4gICAgY3R4LmZvbnQgPSBcIjIwcHggQ291cmllclwiO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiQmxhY2tcIjtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwi0KHRh9C10YI6IFwiKyBzY29yZSxibG9ja1NpemUsYmxvY2tTaXplKTtcclxufTtcclxuLy8g0JrQvtC90LXRhiDQuNCz0YDRi1xyXG5sZXQgZ2FtZU92ZXIgPSAoKT0+e1xyXG4gICAgLy9jbGVhckludGVydmFsKGludGVydmFsSWQpOy8v0L7RgdGC0LDQvdC+0LLQutCwINGB0YfQtdGC0YfQuNC60LBcclxuICAgIGxldCBoYW5kbGU7XHJcbiAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgIGN0eC5mb250ID0gXCIzMHB4IENvdXJpZXJcIjtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIkJsYWNrXCI7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwi0JrQvtC90LXRhiDQuNCz0YDRi1wiLCB3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xyXG59O1xyXG5cclxuLy/RgNC40YHRg9C10Lwg0L7QutGA0YPQttC90L7RgdGC0Ywg0LTQu9GPIGFwcGxlXHJcbmxldCBjaXJjbGUgPSAoeCx5LHJhZGl1cyxmaWxsQ2lyY2xlKT0+e1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpOyAvL9GB0L7Qt9C00LDQtdGCINC90L7QstGL0Lkg0LrQvtC90YLRg9GAXHJcbiAgICBjdHguYXJjKHgseSxyYWRpdXMsMCxNYXRoLlBJKjIpOy8v0YDQuNGB0L7QstCw0L3QuNC1INC00YPQs1xyXG4gICAgaWYgKGZpbGxDaXJjbGUpe1xyXG4gICAgICAgIGN0eC5maWxsKCk7Ly/Qt9Cw0L/QvtC70L3QtdC90LXQvdC90LDRj1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpOy8v0LrQvtC90YLRg9GAXHJcbiAgICB9XHJcbn07XHJcblxyXG4vL9C30LDQtNCw0LXQvCDRj9GH0LXQudC60YNcclxuY2xhc3MgQmxvY2t7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb2wscm93KXtcclxuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcclxuICAgICAgICB0aGlzLnJvdyA9IHJvdztcclxuICAgIH1cclxuICAgIC8v0YDQuNGB0YPQtdC8INGP0YfQtdC50LrQuFxyXG4gICAgZHJhd1NxdWFyZShjb2xvcil7XHJcbiAgICAgICAgbGV0IHggPSB0aGlzLmNvbCAqYmxvY2tTaXplO1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy5yb3cgKiBibG9ja1NpemU7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh4LHksYmxvY2tTaXplLGJsb2NrU2l6ZSk7XHJcbiAgICB9O1xyXG4gICAgLy/RgNC40YHRg9C10LwgYXBwbGVcclxuICAgIGRyYXdDaXJjbGUoY29sb3Ipe1xyXG4gICAgICAgIGxldCBjZW50ZXJYID0gdGhpcy5jb2wqYmxvY2tTaXplICsgYmxvY2tTaXplIC8gMjtcclxuICAgICAgICBsZXQgY2VudGVyWSA9IHRoaXMucm93ICogYmxvY2tTaXplICsgYmxvY2tTaXplIC8gMjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY2lyY2xlKGNlbnRlclgsY2VudGVyWSxibG9ja1NpemUgLyAyLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy/Qv9GA0L7QstC10YDQutCwLiDQndCw0YXQvtC00LjRgtGB0Y8g0LvQuCDRj9GH0LXQudC60LAg0LIg0YLQvtC5INC20LUg0L/QvtC30LjRhtC40LhcclxuICAgIGVxdWFsKG90aGVyQmxvY2spe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbCA9PT0gb3RoZXJCbG9jay5jb2wgJiYgdGhpcy5yb3cgPT09IG90aGVyQmxvY2sucm93O1xyXG4gICAgfTtcclxufVxyXG5cclxuLy/Qt9Cw0LTQsNC10Lwg0LfQvNC10Y5cclxuY2xhc3MgU25ha2V7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBCbG9jaygzLDEpLFxyXG4gICAgICAgICAgICBuZXcgQmxvY2soMiwxKSxcclxuICAgICAgICAgICAgbmV3IEJsb2NrKDEsMSlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiOy8v0YLQtdC60YPRidC10LUg0L3QsNC/0YDQsNCy0LvQtdC90LjQtVxyXG4gICAgICAgIHRoaXMubmV4dERpcmVjdGlvbiA9IFwicmlnaHRcIjsvL9GB0LvQtdC00YPRjtGJ0LXQtSDQvdCw0L/RgNCw0LLQu9C10L3QuNC1XHJcbiAgICB9XHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgc2VnIG9mIHRoaXMuc2VnbWVudHMpe1xyXG4gICAgICAgIC8vICAgICBzZWcuZHJhd1NxdWFyZShcIlJlZFwiKTtcclxuICAgICAgICAvLyB9OyAvL9Cy0YHQtSDQvtC00L3QuNC8INGG0LLQtdGC0L7QvFxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZWdtZW50c1swXS5kcmF3U3F1YXJlKFwiUmVkXCIpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCB0aGlzLnNlZ21lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYgKGklMil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzW2ldLmRyYXdTcXVhcmUoXCJ5ZWxsb3dcIik7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHNbaV0uZHJhd1NxdWFyZShcImJsdWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvL9C/0LXRgNC10LTQuNC20LXQvdC40LUg0LfQvNC10LhcclxuICAgIG1vdmUoKXtcclxuICAgICAgICBsZXQgaGVhZCA9IHRoaXMuc2VnbWVudHNbMF07XHJcbiAgICAgICAgbGV0IG5ld0hlYWQ7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5uZXh0RGlyZWN0aW9uO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcInJpZ2h0XCIpe1xyXG4gICAgICAgICAgICBuZXdIZWFkID0gbmV3IEJsb2NrKGhlYWQuY29sKzEsIGhlYWQucm93KTtcclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCJkb3duXCIpe1xyXG4gICAgICAgICAgICBuZXdIZWFkID0gbmV3IEJsb2NrKGhlYWQuY29sLCBoZWFkLnJvdysxKTtcclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCJsZWZ0XCIpe1xyXG4gICAgICAgICAgICBuZXdIZWFkID0gbmV3IEJsb2NrKGhlYWQuY29sLTEsIGhlYWQucm93KTtcclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCJ1cFwiKXtcclxuICAgICAgICAgICAgbmV3SGVhZCA9IG5ldyBCbG9jayhoZWFkLmNvbCwgaGVhZC5yb3ctMSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tDb2xsaXNpb24obmV3SGVhZCkpe1xyXG4gICAgICAgICAgICBnYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWdtZW50cy51bnNoaWZ0KG5ld0hlYWQpO1xyXG4gICAgICAgIGlmIChuZXdIZWFkLmVxdWFsKGFwcGxlLnBvc2l0aW9uKSl7XHJcbiAgICAgICAgICAgIHNjb3JlICs9MTtcclxuICAgICAgICAgICAgYXBwbGUubW92ZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvL9C/0YDQvtCy0LXRgNC60LAg0L3QsCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUg0YEg0YHQvtCx0L7QuSDQuNC70Lgg0YHRgtC10L3QvtC5XHJcbiAgICBjaGVja0NvbGxpc2lvbihoZWFkKXtcclxuICAgICAgICBsZXQgbGVmdENvbGxpc2lvbiA9IChoZWFkLmNvbCA9PT0gMCk7XHJcbiAgICAgICAgbGV0IHRvcHRDb2xsaXNpb24gPSAoaGVhZC5yb3cgPT09IDApO1xyXG4gICAgICAgIGxldCByaWdodHRDb2xsaXNpb24gPSAoaGVhZC5jb2wgPT09IHdpZHRoSW5CbG9ja3MgLSAxKTsgXHJcbiAgICAgICAgbGV0IGJvdHRvbUNvbGxpc2lvbiA9IChoZWFkLnJvdyA9PT0gaGVpZ2h0SW5CbG9ja3MgLSAxKTtcclxuXHJcbiAgICAgICAgbGV0IHdhbGxDb2xsaXNpb24gPSBsZWZ0Q29sbGlzaW9uIHx8IHRvcHRDb2xsaXNpb24gfHwgcmlnaHR0Q29sbGlzaW9uIHx8IGJvdHRvbUNvbGxpc2lvbjtcclxuXHJcbiAgICAgICAgbGV0IHNlbGZDb2xsaXNpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgc2VnIG9mIHRoaXMuc2VnbWVudHMpe1xyXG4gICAgICAgICAgICBpZiAoaGVhZC5lcXVhbChzZWcpKXtcclxuICAgICAgICAgICAgICAgIHNlbGZDb2xsaXNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3YWxsQ29sbGlzaW9uIHx8IHNlbGZDb2xsaXNpb247XHJcbiAgICB9O1xyXG4gICAgLy8g0LfQsNC00LDQtdC8INGB0LvQtdC00YPRjtGJ0LXQtSDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC30LzQtdC4XHJcbiAgICBzZXREaXJlY3Rpb24obmV3RGlyZWN0aW9uKXtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwidXBcIiAmJiBuZXdEaXJlY3Rpb24gPT09IFwiZG93blwiKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIG5ld0RpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiBuZXdEaXJlY3Rpb24gPT09IFwidXBcIil7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiICYmIG5ld0RpcmVjdGlvbiA9PT0gXCJyaWdodFwiKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubmV4dERpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcclxuICAgIH07XHJcbn07XHJcblxyXG5jbGFzcyBBcHBsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQmxvY2sod2lkdGhJbkJsb2NrcyAvIDIsaGVpZ2h0SW5CbG9ja3MgLyAyKTtcclxuICAgIH07XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uZHJhd0NpcmNsZShcIkxpbWVHcmVlblwiKTtcclxuICAgIH07XHJcblxyXG4gICAgbW92ZSgpe1xyXG4gICAgICAgIGxldCByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAod2lkdGhJbkJsb2NrcyAtIDIpICsgMSk7Ly/Qv9C+0LPRgNCw0L3QuNGH0L3QvtC1INC30L3QsNGH0LXQvdC40LVcclxuICAgICAgICBsZXQgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiAoaGVpZ2h0SW5CbG9ja3MgLSAyKSArIDEpOy8vINC+0YIgMSDQtNC+IHdpZHRoSW5CbG9ja3MgLSAxXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHdoaWxlKGkgPCBzbmFrZS5zZWdtZW50cy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBpZiAoc25ha2Uuc2VnbWVudHNbaV0uY29sID09PSByYW5kb21Db2wgJiYgc25ha2Uuc2VnbWVudHNbaV0ucm93ID09PSByYW5kb21Sb3cpe1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHdpZHRoSW5CbG9ja3MgLSAyKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiAoaGVpZ2h0SW5CbG9ja3MgLSAyKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaSArPSAxO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICBuZXcgQmxvY2sgKHJhbmRvbUNvbCxyYW5kb21Sb3cpO1xyXG4gICAgfTtcclxufTtcclxuXHJcbmxldCBzbmFrZSA9IG5ldyBTbmFrZSgpO1xyXG5sZXQgYXBwbGUgPSBuZXcgQXBwbGUoKTtcclxuXHJcbmxldCBkaXJlY3Rpb24gPSB7XHJcbiAgICAgMzc6IFwibGVmdFwiLFxyXG4gICAgIDM4OiBcInVwXCIsXHJcbiAgICAgMzk6IFwicmlnaHRcIixcclxuICAgICA0MDogXCJkb3duXCJcclxuIH1cclxuXHJcbiAkKFwiYm9keVwiKS5rZXlkb3duKGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICBsZXQgbmV3RGlyZWN0aW9uID0gZGlyZWN0aW9uW2V2ZW50LmtleUNvZGVdO1xyXG5cclxuICAgICBpZiAobmV3RGlyZWN0aW9uICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICBzbmFrZS5zZXREaXJlY3Rpb24obmV3RGlyZWN0aW9uKTtcclxuICAgICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIGxldCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuLy8gICAgIGN0eC5jbGVhclJlY3QoMCwwLHdpZHRoLGhlaWdodCk7XHJcbi8vICAgICBkcmF3U2NvcmUoKTtcclxuLy8gICAgIHNuYWtlLm1vdmUoKTtcclxuLy8gICAgIHNuYWtlLmRyYXcoKTtcclxuLy8gICAgIGFwcGxlLmRyYXcoKTtcclxuLy8gICAgIGRyYXdCb3JkZXIoKTtcclxuLy8gfSwxMDApO1xyXG5cclxuXHJcbmxldCBhbmltYXRpb25UaW1lID0gMTAwO1xyXG5sZXQgbGV2ZWxPZkNvbXBsZXhpdHkgPSBzY29yZSAqIDI7XHJcbmxldCBnYW1lTG9vcCA9ICgpID0+IHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwwLHdpZHRoLGhlaWdodCk7XHJcbiAgICBkcmF3U2NvcmUoKTtcclxuICAgIHNuYWtlLm1vdmUoKTtcclxuICAgIHNuYWtlLmRyYXcoKTtcclxuICAgIGFwcGxlLmRyYXcoKTtcclxuICAgIGRyYXdCb3JkZXIoKTtcclxuICAgIHNldFRpbWVvdXQoZ2FtZUxvb3AsYW5pbWF0aW9uVGltZS1sZXZlbE9mQ29tcGxleGl0eSk7XHJcbn07XHJcblxyXG5nYW1lTG9vcCgpOyJdfQ==
