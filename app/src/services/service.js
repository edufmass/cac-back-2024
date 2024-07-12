class Service {
    constructor (model) {
      this.model = model;
    }
  
    async create (body) {
      const data = await this.model.create(body)
  
      if (!data) {
        throw new Error('Not created')
      }
  
      return data
    }
  
    async findAll (options = {}) {
      const data = await this.model.findAll()
  
      if (!data) {
        throw new Error('Internal server error')
      }
  
      return data
    }
  
    async findOne (options) {
      const data = await this.model.findOne(options)
  
      if (!data) {
        throw new Error('Not found')
      }
  
      return data
    }
  
    async findByPk (id) {
      const data = await this.model.findByPk(id)
  
      if (!data) {
        throw new Error('Not found')
      }
  
      return data
    }
  
    async update (id, body) {
      const data = await this.model.findByPk(id)
  
      if (!data) {
        throw new Error('Not found')
      }
  
      const payload = {
        ...data.dataValues,
        ...body
      }

      data.set(payload)
      await data.save()
      //await this.model.update(id, payload)
  
      return payload
    }
  
    async remove (id) {
      const data = await this.model.findByPk(id)
  
      if (!data) {
        throw new Error('Not found')
      }
  
      //await this.model.destroy()
      await data.destroy()
  
      return null
    }
  }
  
  module.exports = Service