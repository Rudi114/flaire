<template>
    <v-dialog v-model="_active" @click:outside="_setActive(false)" width = "500">
        <v-card>
            <v-tabs grow = 'true' centered="true" height = "150">
                <v-tab>
                    Log In
                </v-tab>
                <v-tab>
                    Sign Up 
                </v-tab>
            </v-tabs>
        </v-card>
    </v-dialog>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    methods: {
        ...mapGetters({
            _active: "state/getSignUp"
        })
    },
    computed: {
        ...mapMutations({
            _setActive: "state/setSignUp"
        })
    }
    
}
</script>