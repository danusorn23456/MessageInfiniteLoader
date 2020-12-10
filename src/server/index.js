const { Server,Model } = require("miragejs");

export function createServer({environment = "development"}={}){
  let server = new Server({
    environment,
    models:{
      chats:Model,
    },

    seeds(server){
      server.create("chat",   {
        id: 1,
        result: [
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[
            {
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            },
            {
              text:'Lorem ipsum dolor sit amet'
            }
            ]
          },
          {
            userId:'1',
            message:[{
              text:'Lorem ipsum dolor sit amet'
            },
            ]
          },
          {
            userId:'2',
            message:[{
              text:'Before Last Lorem ipsum dolor sit amet'
            },
            {
              text:'Last Lorem ipsum dolor sit amet'
            }
            ]
          },
        ],
      },)
     
    },

    routes(){
      this.namespace = "api";
      this.get("/chat/:id",(schema,request)=>{
        let id = request.params.id;
        return [...schema.chats.find(id).result];
      })
    }
  })
}