// EJERCICO 15

function retornarMes(mes)
{
    if(mes>0 && mes<13)
    {
        switch(mes)
        {
            case 1:
                alert("ENERO");
                break;
            case 2:
                alert("FEBRERO");
                break;
            case 3:
                alert("MARZO");
                break;
            case 4:
                alert("ABRIL");
                break;
            case 5:
                alert("MAYO");
                break;
            case 6:
                alert("JUNIO");
                break;
            case 7:
                alert("JULIO");
                break;
            case 8:
                alert("AGOSTO");
                break;
            case 9:
                alert("SEPTIEMBRE");
                break;
            case 10:
                alert("OCTUBRE");
                break;
            case 11:
                alert("NOVIEMBRE");
                break;
            default:
                alert("DICIEMBRE");
                break;
                
        }
    }
    else
        alert("NO ES UN MES");
}

let mes;
mes=prompt("INGRESE UN NUMERO: ");
mes=parseInt(mes);
retornarMes(mes);