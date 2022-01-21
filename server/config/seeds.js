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

    const Exercises = await Exercise.insertMany([
        { 
            name: 'Dumbbell Front Raises',
            video: 'https://www.youtube.com/watch?v=-t7fuZ0KhDA',
            reps: 8,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[0]._id
        },
        { 
            name: 'Bicep Curl',
            video: 'https://www.youtube.com/watch?v=sAq_ocpRh_I',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[1]._id
        },
        { 
            name: 'Russian Twists',
            video: 'https://www.youtube.com/watch?v=wkD8rjkodUI',
            reps: 20,
            sets: 5,
            rest: 30,
            muscleGroup: muscleGroup[2]._id
        },
        { 
            name: 'Leg Extensions',
            video: 'https://www.youtube.com/watch?v=YyvSfVjQeL0',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[3]._id
        },
        { 
            name: 'Chest Press',
            video: 'https://www.youtube.com/watch?v=VmB1G1K7v94',
            reps: 10,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[4]._id
        },
        { 
            name: 'Barbell Reverse Bicep Curl',
            video: 'https://www.youtube.com/watch?v=nRgxYX2Ve9w',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[5]._id
        },
        { 
            name: 'Sit-Ups',
            video: 'https://www.youtube.com/watch?v=1fbU_MkV7NE&ab_channel=LIVESTRONG.COM',
            reps: 30,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[6]._id
        },
        { 
            name: 'Dumbbell Shrugs',
            video: 'https://www.youtube.com/watch?v=cJRVVxmytaM',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[7]._id
        },
        { 
            name: 'Skull Crushers',
            video: 'https://www.youtube.com/watch?v=d_KZxkY_0cM',
            reps: 8,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[8]._id
        },
        { 
            name: 'Deadlift',
            video: 'https://www.youtube.com/watch?v=ytGaGIn3SjE',
            reps: 10,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[9]._id
        },
        { 
            name: 'Leg Curl',
            video: 'https://www.youtube.com/watch?v=ELOCsoDSmrg&ab_channel=ScottHermanFitness',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[10]._id
        },
        { 
            name: 'Seated Cable Row',
            video: 'https://www.youtube.com/watch?v=GZbfZ033f74',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[11]._id
        },
        { 
            name: 'Barbell Squat',
            video: 'https://www.youtube.com/watch?v=SW_C1A-rejs',
            reps: 10,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[12]._id
        },
        { 
            name: 'Standing Calf Raises',
            video: 'https://www.youtube.com/watch?v=YMmgqO8Jo-k&ab_channel=ScottHermanFitness',
            reps: 12,
            sets: 3,
            rest: 30,
            muscleGroup: muscleGroup[13]._id
        },
    ]);
    console.log('Exercise seeded');

    

    await User.deleteMany();

    await User.create({
        firstName: 'Nicole',
        lastName: 'Wrzosek',
        email: "nicole@email.com",
        password: 'password123',
        bmi: 25.24
    });

    console.log('users seeded')

    await Workout.deleteMany();

    await Workout.create({
        name: 'Bicep Workout',
        exercises: [
            { 
                name: 'Dumbbell Front Raises',
                video: 'https://www.youtube.com/watch?v=-t7fuZ0KhDA',
                reps: 8,
                sets: 3,
                rest: 30,
                muscleGroup: muscleGroup[0]._id
            },
            { 
                name: 'Bicep Curl',
                video: 'https://www.youtube.com/watch?v=sAq_ocpRh_I',
                reps: 12,
                sets: 3,
                rest: 30,
                muscleGroup: muscleGroup[1]._id
            }]
    });
    console.log("Workout Seeded");

process.exit();
});