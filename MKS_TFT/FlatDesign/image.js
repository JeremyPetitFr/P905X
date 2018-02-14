function change(image,list)
{
    
    cpt=0;
    strloc = image.src;
    
    while (cpt<list.length  && (!strloc.includes(list[cpt])) )
    {
        cpt++;
    }
    cpt++;
    
    if (cpt>(list.length-1))
        image.src='mks_pic/src/'+list[0];
    else
        image.src='mks_pic/src/'+list[cpt];
}
