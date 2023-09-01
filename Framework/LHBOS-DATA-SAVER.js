function LHBOS_SAVE(name,value)
{
localStorage.setItem(name, value);
}
function LHBOS_GET(name)
{
const data = localStorage.getItem(name);
return data
}
function LHBOS_REMOVE(name)
{
localStorage.removeItem(name);
}
