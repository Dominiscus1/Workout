const db = require('./connection');
const { User, Workout, MuscleGroup, Exercise} = require('../models');

db.once('open', async () => {
    await MuscleGroup.deleteMany();
  
    const muscleGroup = await MuscleGroup.insertMany([
      { name: 'Deltoid' },
      { name: 'Biceps' },
      { name: 'Side Abs' },
      { name: 'Quadriceps' },
      { name: 'Chest' },
      { name: 'Forearms' },
      { name: 'Abdominals' },
      { name: 'Upper Back' },
      { name: 'Triceps' },
      { name: 'Lower Back' },
      { name: 'Hamstring Group' },
      { name: 'Middle back' },
      { name: 'Gluteus Maximus' },
      { name: 'Calf' }
    ]);
    console.log("Muscle Group seeded");

    await Exercise.deleteMany();

    const exercises = await Exercise.insertMany([
        { 
            name: 'Dumbbell Front Raises',
            video: 'https://www.youtube.com/embed/-t7fuZ0KhDA',
            reps: 8,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[0]._id
        },
        { 
            name: 'Arnold Press (Anterior)',
            video: 'https://www.youtube.com/embed/3ml7BH7mNwQ',
            reps: 10,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[0]._id
        },
        { 
            name: 'Dumbbell Side Raise (Lateral)',
            video: 'https://www.youtube.com/embed/3VcKaXpzqRo',
            reps: 10,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[0]._id
        },
        {
            name: 'Hammer Curl',
            video: 'https://www.youtube.com/embed/zC3nLlEvin4',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[1]._id
        },
        { 
            name: 'Bicep Curl',
            video: 'https://www.youtube.com/embed/sAq_ocpRh_I',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[1]._id
        },
        { 
            name: 'Russian Twists',
            video: 'https://www.youtube.com/embed/wkD8rjkodUI',
            reps: 20,
            sets: 5,
            rest: 30,
            muscleGroup: muscleGroup[2]._id
        },
        { 
            name: 'Leg Extensions',
            video: 'https://www.youtube.com/embed/YyvSfVjQeL0',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[3]._id
        },
        { 
            name: 'Chest Press',
            video: 'https://www.youtube.com/embed/VmB1G1K7v94',
            reps: 10,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[4]._id
        },
        { 
            name: 'Barbell Reverse Bicep Curl',
            video: 'https://www.youtube.com/embed/nRgxYX2Ve9w',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[5]._id
        },
        { 
            name: 'Sit-Ups',
            video: 'https://www.youtube.com/embed/1fbU_MkV7NE',
            reps: 30,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[6]._id
        },
        { 
            name: 'Dumbbell Shrugs',
            video: 'https://www.youtube.com/embed/cJRVVxmytaM',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[7]._id
        },
        { 
            name: 'Skull Crushers',
            video: 'https://www.youtube.com/embed/d_KZxkY_0cM',
            reps: 8,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[8]._id
        },
        { 
            name: 'Deadlift',
            video: 'https://www.youtube.com/embed/ytGaGIn3SjE',
            reps: 10,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[9]._id
        },
        { 
            name: 'Seated Leg Curl',
            video: 'https://www.youtube.com/embed/ELOCsoDSmrg',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[10]._id
        },
        { 
            name: 'Seated Cable Row',
            video: 'https://www.youtube.com/embed/GZbfZ033f74',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[11]._id
        },
        { 
            name: 'Barbell Squat',
            video: 'https://www.youtube.com/embed/SW_C1A-rejs',
            reps: 10,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[12]._id
        },
        { 
            name: 'Standing Calf Raises',
            video: 'https://www.youtube.com/embed/YMmgqO8Jo-k',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[13]._id
        },
    ]);
    console.log('Exercise seeded');


    await Workout.deleteMany();

    const workouts = await Workout.insertMany([
        {name: 'Bicep Workout', 
        exercises: [
            { 
                name: 'Hammer Curl',
                video: 'https://www.youtube.com/embed/zC3nLlEvin4',
                reps: 12,
                sets: 3,
                rest: 30,
                muscleGroup: muscleGroup[1]._id
            },
            { 
                name: 'Alternating Bicep Curl',
                video: 'https://www.youtube.com/embed/sAq_ocpRh_I',
                reps: 12,
                sets: 3,
                rest: 30,
                muscleGroup: muscleGroup[1]._id
            }]},
        {name: 'Tricep Workout',
        exercises: [
            {
                name: 'Skull Crushers',
                video: 'https://www.youtube.com/embed/d_KZxkY_0cM',
                reps: 8,
                sets: 3,
                rest: 30,
                muscleGroup: muscleGroup[8]._id
            }
        ]
        }]);
    console.log("Workout Seeded");

    await User.deleteMany();

    await User.create({
        firstName: 'Nicole',
        lastName: 'Wrzosek',
        email: "nicole@email.com",
        password: 'password123',
        bmi: 25.24,
        workouts: [workouts[0], workouts[1]]
    });

    console.log('users seeded')

process.exit();
});