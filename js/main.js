/**
 * Created by cuizhengliang on 2017/2/12.
 */
$(document).ready(function(){
    $('#story').fullpage({
        anchors: ['page1','page2','page3','page4','page5','page6','page7','page8','page9'],
        afterLoad: function(anchorLink, index){
            switch (index) {
                case 1:
                    move('.p1boy').set('opacity',1).end();
                    move('.p1girl').set('opacity',1).end();
                    move('.p1sky').set('opacity',1).end(function () {
                        move('.p1 .topLeft').set('left','10%').end();
                        move('.p1 .topRight').set('right','10%').end();
                        move('.p1 .bottomP').set('opacity',1).end();
                    });
                    break;
                case 2:
                    move('.p2crrc').set('opacity',1).duration('0.4s').end(function () {
                        move('.p2boy').set('opacity',1).set('top','70%').end();
                        move('.p2girl').set('opacity',1).set('top','70%').end(function () {
                            move('.p2 .topP').set('opacity',1).end();
                        });
                    });
                    break;
                case 3:
                    move('.p3 img').set('opacity',1).end();
                    move('.p3 .bottomP').set('opacity',1).end(function () {
                        move('.topLeftEm').set('opacity',1).rotate(-45).end();
                    });
                    break;
                case 4:
                    move('.p4boy').set('opacity',1).end();
                    move('.p4girl').set('opacity',1).set('left','26%').end(function () {
                        move('.p4 .topP').set('opacity',1).end();
                        move('.p4 .bottomP').set('opacity',1).end();
                    });
                    break;
                case 5:
                    move('.p5girl').set('opacity',1).end();
                    move('.p5 .topLeft').set('left','10%').end(function () {
                        move('.p5boy').set('opacity',1).end();
                        move('.p5 .topRight').set('right','10%').end(function () {
                            move('.p5 .bottomP').set('opacity',1).end();
                        });
                    });
                    break;
                case 6:
                    move('.p6 .bottomP').set('opacity',1).end();
                    move('.p6floor').set('opacity',1).end();
                    move('.p6girl').set('opacity',1).end();
                    move('.p6 .topLeft').set('left','6%').end(function () {
                        move('.p6boy').set('opacity',1).end();
                        move('.p6 .topRight').set('right','6%').end();
                    });
                    break;
                case 7:
                    move('.p7suger').set('opacity',1).duration('0.3s').end(function () {
                        move('.p7quilt').set('opacity',1).duration('0.3s').end(function () {
                            move('.p7paper').set('opacity',1).duration('0.3s').end(function () {
                                move('.p7orange').set('opacity',1).duration('0.3s').end();
                                move('.p7 .topP').set('opacity',1).end();
                            });
                        });
                    });
                    break;
                case 8:
                    move('.p8 img').set({'opacity':1,'top':'50%'}).end(function () {
                        move('.p8 .bottomP').set('opacity',1).end();
                    });
                    break;
                case 9:
                    move('.p9floor').set('opacity',1).end();
                    move('.p9us').set({'opacity':1,'top':'60%'}).duration('.5s').end();
                    move('.p9sky').set({'opacity':1,'right':'50%'}).duration('.8s').end();
                    move('.p9 .topLeft').set({'left':'10%','top':'20%'}).duration('1s').end();
                    move('.p9 .topRight').set({'right':'10%','top':'20%'}).duration('1s').end();
                    break;
                default:
                    break;
            }
        },
        onLeave: function(index, nextIndex, direction) {
            switch (index) {
                case 1:
                    move('.p1boy').set('opacity',0).end();
                    move('.p1girl').set('opacity',0).end();
                    move('.p1sky').set('opacity',0).end();
                    move('.p1 .topLeft').set('left','-50%').end();
                    move('.p1 .topRight').set('right','-50%').end();
                    move('.p1 .bottomP').set('opacity',0).end();
                    break;
                case 2:
                    move('.p2boy').set('opacity',0).set('top','90%').end();
                    move('.p2girl').set('opacity',0).set('top','90%').end();
                    move('.p2crrc').set('opacity',0).end();
                    move('.p2 .topP').set('opacity',0).end();
                    break;
                case 3:
                    move('.p3 img').set('opacity',0).end();
                    move('.p3 .bottomP').set('opacity',0).end();
                    move('.topLeftEm').rotate(0).set('opacity',0).end();
                    break;
                case 4:
                    move('.p4boy').set('opacity',0).end();
                    move('.p4girl').set('opacity',0).set('left','-100%').end();
                    break;
                case 5:
                    move('.p5girl').set('opacity',0).end();
                    move('.p5 .topLeft').set('left','-50%').end();
                    move('.p5boy').set('opacity',0).end();
                    move('.p5 .topRight').set('right','-50%').end();
                    move('.p5 .bottomP').set('opacity',0).end();
                    break;
                case 6:
                    move('.p6girl').set('opacity',0).end();
                    move('.p6 .topLeft').set('left','-50%').end();
                    move('.p6boy').set('opacity',0).end();
                    move('.p6 .topRight').set('right','-50%').end();
                    move('.p6 .bottomP').set('opacity',0).end();
                    move('.p6floor').set('opacity',0).end();
                    break;
                case 7:
                    move('.p7suger').set('opacity',0).end();
                    move('.p7quilt').set('opacity',0).end();
                    move('.p7paper').set('opacity',0).end();
                    move('.p7orange').set('opacity',0).end();
                    move('.p7 .topP').set('opacity',0).end();
                    break;
                case 8:
                    move('.p8 img').set({'opacity':0,'top':'70%'}).end();
                    move('.p8 .bottomP').set('opacity',0).end();
                    break;
                case 9:
                    move('.p9floor').set('opacity',0).end();
                    move('.p9us').set({'opacity':0,'top':'70%'}).end();
                    move('.p9sky').set({'opacity':0,'right':'-100%'}).end();
                    move('.p9 .topLeft').set({'left':'-50%','top':'12%'}).duration('1s').end();
                    move('.p9 .topRight').set({'right':'-50%','top':'12%'}).duration('1s').end();
                    break;
                default:
                    break;
            }
        }
    });
});