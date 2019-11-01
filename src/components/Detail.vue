<template>
  <div id="app">
    <h1> spell it out </h1>
    <div class="App">
      <div class="wrapper">
        <div class="workspace" ref="workspace">

<!-- Dit is de voorbeeld code van vue-free-transform -->

          <FreeTransform
            v-for="element in elements"
            :key="element.id"
            :x="element.x"
            :y="element.y"
            :scale-x="element.scaleX"
            :scale-y="element.scaleY"
            :width="element.width"
            :height="element.height"
            :angle="element.angle"
            :offset-x="offsetX"
            :offset-y="offsetY"
            :disable-scale="element.disableScale === true"
            @update="update(element.id, $event);"
          >
            <div class="element" :style="getElementStyles(element)">
            </div>
      
          </FreeTransform>

            <div class="buttons-class">
              <button type="button" name="button">save</button>
              <button type="button" name="button">delete</button>
              <button type="button" name="button">redo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import FreeTransform from 'vue-free-transform'

  export default {
  name:'Detail',
  components: {
  FreeTransform
},
  props:{
      results:[],
},

// Dit is de voorbeeld code van vue-free-transform !
// Ik wilde in ieder geval laten zien dat er een package bestaat voor mijn concept.
// Als ik meer tijd heb gehad zou ik de opgeslagen foto's in de blokken zetten.

  data() {
    return {
      elements: [
        {
          id: "el-1",
          x: 100,
          y: 50,
          scaleX: 1,
          scaleY: 1,
          width: 100,
          height: 100,
          angle: 0,
          classPrefix: "tr",
          styles: {
            background: '#999'
          }
        },
        {
          id: "el-2",
          x: 225,
          y: 225,
          scaleX: 1,
          scaleY: 1,
          width: 100,
          height: 100,
          angle: 0,
          classPrefix: "tr2",
          text: "Scale Enabled",
          styles: {
            padding: `5px`,
            background: "#0993"
          }
        },
        {
          id: "el-3",
          x: 100,
          y: 225,
          scaleX: 1,
          scaleY: 1,
          width: 100,
          height: 100,
          angle: 0,
          classPrefix: "tr2",
          text: "Scale Disabled",
          styles: {
            padding: 5,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)"
          },
          disableScale: true
        },
        {
          id: "el-4",
          x: 100,
          y: 400,
          scaleX: 1,
          scaleY: 1,
          width: 100,
          height: 100,
          angle: 45,
          classPrefix: "tr3",
          styles: {
            background: "linear-gradient(135deg, #b1ea4d 0%,#459522 100%)"
          }
        }
      ],
      offsetX: 0,
      offsetY: 0
    }
  },
  mounted(){
    this.offsetX = this.$refs.workspace.offsetLeft
    this.offsetY = this.$refs.workspace.offsetTop
},
  methods: {
    update(id, payload) {
      this.elements = this.elements.map(item => {
        if (item.id === id) {
          return {
            ...item,
            ...payload
          };
        }
        return item;
      });
    },
    getElementStyles(element) {
      const styles = element.styles ? element.styles : {};
      return {
        width: `${element.width}px`,
        height: `${element.height}px`,
        ...styles
      };
    }
  }
}
</script>
<style scoped>
/* #app {
  display: flex;
  background: #f8fafc;
}

.wrapper {
  flex: 1;
}

.workspace {
  width: 800px;
  height: 800px;
  margin: 25px auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
}

* {
  box-sizing: border-box;
}

.tr-transform__content {
  user-select: none;
}

.tr-transform__rotator {
  top: -45px;
  left: calc(50% - 7px);
}

.tr-transform__rotator,
.tr-transform__scale-point {
  background: #fff;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.tr-transform__rotator:hover,
.tr-transform__scale-point:hover {
  background: #f1f5f8;
}

.tr-transform__rotator:active,
.tr-transform__scale-point:active {
  background: #dae1e7;
}

.tr-transform__scale-point {
}

.tr-transform__scale-point--tl {
  top: -7px;
  left: -7px;
}

.tr-transform__scale-point--ml {
  top: calc(50% - 7px);
  left: -7px;
}

.tr-transform__scale-point--tr {
  left: calc(100% - 7px);
  top: -7px;
}

.tr-transform__scale-point--tm {
  left: calc(50% - 7px);
  top: -7px;
}

.tr-transform__scale-point--mr {
  left: calc(100% - 7px);
  top: calc(50% - 7px);
}

.tr-transform__scale-point--bl {
  left: -7px;
  top: calc(100% - 7px);
}

.tr-transform__scale-point--bm {
  left: calc(50% - 7px);
  top: calc(100% - 7px);
}

.tr-transform__scale-point--br {
  left: calc(100% - 7px);
  top: calc(100% - 7px);
} */
</style>