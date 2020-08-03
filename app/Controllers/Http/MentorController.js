'use strict'

const Mentor = use('App/Models/Mentor')

class MentorController {
    async index({response}) {
        let mentors = await Mentor.all()

        return response.json(mentors)
    }

    async store({request, response}) {
        const mentorInfo = request.only([ 'mentor_name' ])
        const mentor = new Mentor()
        mentor.mentor_name = mentorInfo.mentor_name

        await mentor.save()
        return response.status(201).json(mentor)
    }

    async show({params, response}) {
        const mentor = await Mentor.find(params.id)

        return response.json(mentor)
    }

    async update({params, request, response}) {
        const mentorInfo = request.only(['mentor_name'])

        const mentor = await Mentor.find(params.id)
        if (!mentor) {
            return response.status(404).json({data: "Data not found"})
        }

        mentor.mentor_name = mentorInfo.mentor_name

        await mentor.save()
        return response.status(200).json(mentor)
    }

    async delete({params, response}) {
        const mentor = await Mentor.find(params.id)
        if (!mentor) {
            return response.status(404).json({data: "Data not found"})
        }
        await mentor.delete()

        return response.status(204).json({data: "success"})

    }
    
}

module.exports = MentorController
